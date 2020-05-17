const db = require('../models');

module.exports = function(app) {
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(error => {
      res.json(error);
    });
  });

  app.post('/api/workouts', async(req, res) => {
    try {
      const response = await db.Workout.create({ type: 'workout' })
      res.json(response);
    } catch (error) {
      res.json(error);
    }
  })

  app.put('/api/workouts/:id', ({ body, params }, res) => {
    const workoutId = params.id;
    let savedExercises = [];
    db.Workout.find({ _id: workoutId })
      .then(dbWorkout => {
        savedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body]
        updateWorkout(allExercises)
      })
      .catch(error => {
        res.json(error);
      });

    function updateWorkout(exercises){
      db.Workout.findByIdAndUpdate(workoutId, { exercises }, function(error, doc){
        if (error){
          console.log(error);
        }
      })
    }
  })

  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(error => {
      res.json(error);
    });
  });
};
