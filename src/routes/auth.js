const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/datas', authController.datas)

module.exports = router