const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const SalesController = require('../controllers/SalesController')

router.get('/salesadd/:id', SalesController.productsSales)
router.get('/salesadd', SalesController.salesAdd)
router.post('/salesadd', SalesController.salesAddSave)
router.get('/sales', SalesController.AllSales)
router.get('/salesupdate/:id', SalesController.updatesales)
router.post('/salesupdate', SalesController.UpdateSalesSave)
router.post('/delete', SalesController.deletesales)







module.exports = router