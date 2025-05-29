const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET /api/doctors
// Example: /api/doctors?specialty=Endocrinologist&minRating=4&minExperience=5
router.get('/', async (req, res) => {
  const { specialty, minRating, minExperience, name, lat, lng, radius } = req.query;

  let query = supabase
    .from('doctors')
    .select('created_at, name, specialty, years_experience, rating, phone, location_lat, location_lng, email');

  // Filter by specialty
  if (specialty) query = query.eq('specialty', specialty);

  // Filter by minimum rating
  if (minRating) query = query.gte('rating', Number(minRating));

  // Filter by minimum years of experience
  if (minExperience) query = query.gte('years_experience', Number(minExperience));

  // Filter by name (partial match)
  if (name) query = query.ilike('name', `%${name}%`);

  // Execute the query
  const { data, error } = await query;

  if (error) return res.status(500).json({ error: error.message });

  // Optional: Filter by location radius (if lat, lng, and radius are provided)
  if (lat && lng && radius) {
    // Haversine formula for distance calculation (in kilometers)
    const toRad = (value) => (value * Math.PI) / 180;
    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);
    const maxDistance = parseFloat(radius);

    const filteredData = data.filter(doc => {
      if (!doc.location_lat || !doc.location_lng) return false;
      const dLat = toRad(doc.location_lat - userLat);
      const dLng = toRad(doc.location_lng - userLng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(userLat)) *
          Math.cos(toRad(doc.location_lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = 6371 * c; // Earth's radius in km
      return distance <= maxDistance;
    });

    return res.json(filteredData);
  }

  res.json(data);
});

module.exports = router;
