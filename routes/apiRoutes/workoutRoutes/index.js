const router = require('express').Router();

const { getLastWorkout, createWorkout, addExercise, getWorkoutsInRange } = require('../../../controllers/workoutController');

// api/workouts
router.route('/')
.get(getLastWorkout)
.post(createWorkout);

router.route('/range')
.get(getWorkoutsInRange);

// api/workouts/id
router.route('/:id')
.put(addExercise);

module.exports = router;
