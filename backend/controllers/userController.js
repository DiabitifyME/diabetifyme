const supabase = require('../config/supabase');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { sendConfirmationEmail } = require('../utils/mailer'); // <-- You implement this

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // only over HTTPS in prod
  sameSite: 'lax',
  path: '/',                                     // available site-wide
};

// Register a new user
const register = async (req, res) => {
  try {
    const { email, password, name, phone_no } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // 1) Sign up with Supabase Auth (password is hashed/stored by Supabase internally)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    // 2) If registration succeeds, hash the password for our own User table
    const password_hash = await bcrypt.hash(password, 12);

    // Custom email confirmation logic
    const confirmation_token = crypto.randomBytes(32).toString('hex');
    const confirmed = false;

    // 3) Store additional user data (including password_hash instead of raw password)
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('User')
        .insert([
          {
            id: authData.user.id,
            name: name,
            email: email,
            created_at: new Date(),
            phone_no: phone_no,
            password: password_hash,
            confirmation_token: confirmation_token,
            confirmed: confirmed,
          },
        ]);

      if (profileError) {
        console.error('Error creating profile:', profileError);
        return res.status(500).json({ error: 'Account Exists' });
      }
          //  log before sending email
      console.log('About to send confirmation email to:', email);
      // Send custom email with confirmation link
      await sendConfirmationEmail(email, confirmation_token);
    }

    // 6) Set auth cookies
    if (authData.session) {
      const { access_token, refresh_token, expires_in } = authData.session;
      res.cookie('access_token', access_token, {
        ...COOKIE_OPTIONS,
        maxAge: expires_in * 1000,
      });
      res.cookie('refresh_token', refresh_token, COOKIE_OPTIONS);
    }

    res.status(201).json({
      message: 'User registered successfully. Check your email for confirmation.',
      userId: authData.user.id,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login user
// (We rely on Supabase Auth to validate the password and create a session)
const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    const { data: userData, error: userError } = await supabase
      .from('User')
      .select('confirmed')
      .eq('id', data.user.id)
      .single();

    if (userError || !userData.confirmed) {
      return res.status(403).json({ error: 'Please confirm your email before logging in.' });
    }

    const { access_token, refresh_token, expires_in } = data.session;
    res.cookie('access_token', access_token, {
      ...COOKIE_OPTIONS,
      maxAge: expires_in * 1000, // convert to ms
    });
    res.cookie('refresh_token', refresh_token, COOKIE_OPTIONS);

    res.json({
      user: data.user,
      session: data.session,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from('User')
      .select('id, name, email, phone_no, avatar_url, bio, created_at, updated_at')
      .eq('id', userId)
      .single();

    if (error) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(data);
  } catch (error) {
    console.error('Profile retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve profile' });
  }
};

const logout = async (req, res) => {
  try {
    await supabase.auth.signOut();
    // Clear cookies on client
    res.clearCookie('access_token', COOKIE_OPTIONS);
    res.clearCookie('refresh_token', COOKIE_OPTIONS);
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, avatar_url, bio, phone_no } = req.body;

    const { data, error } = await supabase
      .from('User')
      .update({
        name,
        avatar_url,
        bio,
        phone_no,
        updated_at: new Date(),
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// Confirm email controller (you’ll need to add this route)
const confirmEmail = async (req, res) => {
  const token = req.query.token?.trim();
  console.log(`Token from req.query: [${token}]`);

  const { data, error } = await supabase
  
  // check this part //
    .from('User')
    .update({ confirmed: true, confirmation_token: null })
    .eq('confirmation_token', token)
    .eq('confirmed', false)
    .select();

  console.log("Supabase data:", data);
  console.log("Supabase error:", error);

  if (error || !data || data.length === 0) {
    return res.status(400).json({ error: 'Invalid or expired confirmation token' });
  }

  res.json({ message: 'Email confirmed successfully' });
};


module.exports = {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  confirmEmail,
};
