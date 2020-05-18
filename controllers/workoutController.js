const { Workout } = require('../models');

module.exports = {

getLastWorkout: async (req, res) => {
  try {
    const lastWorkout = await Workout.find({});
      console.log(lastWorkout);
    if (!lastWorkout) {
      return res.status(400).json({ error: 'There are no workouts saved' });
    }
    return res.status(200).json(lastWorkout);
  } catch (e) {
    return res.status(403).json(e);
  }
},

addExercise: async (req, res) => {
  const { id } = req.params;
  const { type, name, duration, distance, weight, reps, sets } = req.body;
  try {
    const newExercise = await Workout.findByIdAndUpdate(id, {$push: { exercises: req.body}}, { new: true } );
    return res.status(200).json(newExercise);
  } catch (e) {
    return res.status(403).json(e);
  }
},
createWorkout: async (req, res) => {
  try {
    const newWorkout = await new Workout();
    newWorkout.save();
    console.log(newWorkout);
    return res.status(200).json(newWorkout);
  } catch (e) {
    return res.status(403).json(e);    
  }
},
getWorkoutsInRange: async (req, res) => {
  try {
    const allWorkouts = await Workout.find({});
      console.log(allWorkouts);
    if (!allWorkouts) {
      return res.status(400).json({ error: 'There are no workouts saved' });
    }
    return res.status(200).json(allWorkouts);
  } catch (e) {
    return res.status(403).json(e);
  }
},
}
