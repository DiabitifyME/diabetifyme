const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Debug: Print the supabase object to check its structure
console.log('SUPABASE:', supabase);

router.post('/check', async (req, res) => {
  const { symptoms } = req.body;

  if (!Array.isArray(symptoms) || symptoms.length === 0) {
    return res.status(400).json({ error: "Please provide an array of symptom names." });
  }

  const { data, error } = await supabase
    .from('symptoms')
    .select('*')
    .in('name', symptoms);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!data || data.length === 0) {
    return res.status(404).json({ message: "No matching symptoms found." });
  }

  res.json(data);
});

module.exports = router;
