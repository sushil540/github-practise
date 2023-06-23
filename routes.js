const express = require('express')
const userController = require('./controller')
const router = express.Router()

router.get('/api/users', userController.get)

module.exports = router