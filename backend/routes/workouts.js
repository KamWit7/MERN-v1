const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

// Get a single workout
router.get('/:id', getWorkout)

// Post a new Workout
router.post('/', createWorkout)

router.delete('/', (req, res) => {
  res.json({ message: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/', (req, res) => {
  res.json({ message: 'UPDATE a workout' })
})

// when -> /api/workout/hello
// router.get('/hello', () => {})

module.exports = router
