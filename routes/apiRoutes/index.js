const router = require('express').Router();

const workoutsRoutes = require('./workoutRoutes');

// /api/workout
router.use('/workouts', workoutsRoutes);

module.exports = router;
