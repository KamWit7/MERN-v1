const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Get all workouts' })
})

// Get a single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single workout' })
})

// Post a new Workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

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
