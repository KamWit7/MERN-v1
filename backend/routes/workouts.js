const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Get all workouts' })
})

// Get a single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single workout' })
})

// Post a new Workout
router.post('/', (req, res) => {
  res.json({ message: 'POST a new workout' })
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
