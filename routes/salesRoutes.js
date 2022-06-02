const express = require('express')
const router = express.Router()
const SalesController = require('../controllers/SalesController')

router.get('/salesadd/:id',SalesController.productsSales)
router.get('/salesadd',SalesController.salesAdd)
router.post('/salesadd',SalesController.salesAddSave)







module.exports = router