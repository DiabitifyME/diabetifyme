// utils/mailer.js
const nodemailer = require('nodemailer');

// Setup your transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use 'smtp.yourprovider.com'
  auth: {
    user: process.env.EMAIL_USER ,      // your email address
    pass: process.env.EMAIL_PASS,      // app-specific password or SMTP password
  },
});

// Send the confirmation email
const sendConfirmationEmail = async (email, token) => {
  const confirmationUrl = `http://127.0.0.1:3000/api/users/confirm?token=${token}`; // Update this to match your frontend route
  console.log(confirmationUrl);
  const mailOptions = {
    from: `"DiabetifyMe" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Confirm your email',
    replyTo: '<${process.env.EMAIL_USER}>', // ✅ Optional: Add support email for replies
    html: `
      <h2>Email Confirmation</h2>
      <p>Thanks for registering! Please confirm your email by clicking the link below:</p>
      <a href="${confirmationUrl}">Confirm Email</a>
      <p>If you did not register, you can ignore this email.</p>
    `,
  };

  try {

      // Log token and email in dev for debugging (avoid in prod)
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Confirmation token: ${token}`);
        console.log(`Confirmation URL: ${confirmationUrl}`);
        console.log(token);
        console.log(confirmationUrl);
      }
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
     // Handle any errors during sending
    console.error('Error sending confirmation email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

module.exports = {
  sendConfirmationEmail,
};
