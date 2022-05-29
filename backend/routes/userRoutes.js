const express = require('express')
const router = express.Router()

const {registerUser, loginUser, getMe} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

//POSTMAN-> http://localhost:5000/api/users
router.post('/', registerUser)

//POSTMAN-> http://localhost:5000/api/users/login
router.post('/login', loginUser)

//POSTMAN-> http://localhost:5000/api/me
router.get('/me',protect, getMe)

module.exports = router