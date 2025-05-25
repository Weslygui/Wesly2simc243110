const express = require('express')
const router = express.Router()
const { getproducts } = require('../controller/dataControllers')

router.get('/', getproducts)

module.exports = router