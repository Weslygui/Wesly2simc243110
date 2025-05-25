const express = require('express')
const router = express.Router()
const { createMessage } = require('../controllers/messageControllers')

router.post('/', createMessage)

module.exports = router