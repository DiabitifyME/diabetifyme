# User API with Node.js and Supabase

A RESTful API for user authentication and profile management using Node.js and Supabase.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_KEY=your_supabase_anon_key
   PORT=3000
   ```
4. Set up your Supabase database with a `profiles` table:
   ```sql
   CREATE TABLE profiles (
     id UUID PRIMARY KEY REFERENCES auth.users(id),
     name TEXT,
     email TEXT NOT NULL,
     avatar_url TEXT,
     bio TEXT,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP
   );
   ```

## Running the API

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

## Endpoints

### Public Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

### Protected Endpoints (requires authentication)

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Authentication

Include the JWT token in the Authorization header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```
