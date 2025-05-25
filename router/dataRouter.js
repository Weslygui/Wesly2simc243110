const express = require('express')
const router = express.Router()
const { getproducts } = require('../controllers/dataControllers')

router.get('/', getproducts)

module.exports = router