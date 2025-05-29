const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');
const haversine = require('haversine-distance');

// POST /api/match-doctors
router.post('/match-doctors', async (req, res) => {
  const { symptoms, location } = req.body; // location: { lat, lng }

  if (!Array.isArray(symptoms) || symptoms.length === 0) {
    return res.status(400).json({ error: "Please provide an array of symptom names." });
  }
  if (!location || typeof location.lat !== 'number' || typeof location.lng !== 'number') {
    return res.status(400).json({ error: "Please provide user's current location (lat, lng)." });
  }

  // 1. Get recommended specialties for the symptoms
  const { data: mappings, error: mapError } = await supabase
    .from('symptom_specialty_map')
    .select('recommended_specialty')
    .in('symptom_name', symptoms);

  if (mapError) {
    return res.status(500).json({ error: mapError.message });
  }

  const specialties = mappings.map(m => m.recommended_specialty);
  const uniqueSpecialties = [...new Set(specialties)];

  if (uniqueSpecialties.length === 0) {
    return res.status(404).json({ message: "No matching specialties found for the provided symptoms." });
  }

  // 2. Query doctors table for these specialties
  const { data: doctors, error: docError } = await supabase
    .from('doctors')
    .select('id, name, specialty, years_experience, rating, phone, location_lat, location_lng, email')
    .in('specialty', uniqueSpecialties);

  if (docError) {
    return res.status(500).json({ error: docError.message });
  }

  // 3. Calculate distance for each doctor and sort
  const userCoords = { lat: location.lat, lng: location.lng };
  const doctorsWithDistance = doctors
    .filter(doc => doc.location_lat && doc.location_lng)
    .map(doc => {
      const docCoords = { lat: doc.location_lat, lng: doc.location_lng };
      const distanceMeters = haversine(userCoords, docCoords);
      return { ...doc, distance_km: (distanceMeters / 1000).toFixed(2) };
    })
    .sort((a, b) => a.distance_km - b.distance_km);

  res.json(doctorsWithDistance);
});

module.exports = router;
