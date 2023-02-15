const express = require('express')
// controller function
const { loginUser, signupUser } = require('../controllers/useController')

const router = express.Router()

//login router
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router
