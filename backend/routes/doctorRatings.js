const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// POST /api/doctors/:doctorId/rate
router.post('/doctors/:doctorId/rate', async (req, res) => {
  const { doctorId } = req.params;
  const { user_id, rating, comment } = req.body;

  if (!user_id || !rating) {
    return res.status(400).json({ error: "user_id and rating are required." });
  }

  // Upsert: one rating per user per doctor
  const { error } = await supabase
    .from('doctor_ratings')
    .upsert([
      { doctor_id: doctorId, user_id, rating, comment }
    ], { onConflict: ['doctor_id', 'user_id'] });

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Rating submitted!" });
});

module.exports = router;
