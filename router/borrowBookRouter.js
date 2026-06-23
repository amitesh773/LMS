const express = require('express')
const router = express.Router()
const {createBookRecord}= require('../controller/createBookRecord')


router.post('/record',createBookRecord)

module.exports = router