const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Post a new Workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

// when -> /api/workout/hello
// router.get('/hello', () => {})

module.exports = router
