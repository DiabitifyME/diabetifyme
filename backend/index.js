require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');
const userController = require('./controllers/userController');

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('User API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


