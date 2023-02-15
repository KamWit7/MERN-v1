require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware, next -> go to next middleware

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' })
})

// a touch all routs from workout.js
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connect to DB & listening on port 4000')
    })
  })
  .catch((err) => console.log('MongoDB confection fail', err))
