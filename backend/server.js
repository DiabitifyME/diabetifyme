const express = require('express')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const app = express()
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// Routes
app.use('/api/symptoms', require('./routes/symptoms'))
app.use('/api/doctors', require('./routes/doctors'))
app.use('/api/chatbot', require('./routes/chatbot'));

// Doctor matching route
const matchRouter = require('./routes/match')
app.use('/api', matchRouter)

// Doctor ratings route (ADD THIS PART)
const doctorRatingsRouter = require('./routes/doctorRatings')
app.use('/api', doctorRatingsRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
