const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const SalesController = require('../controllers/SalesController')

router.get('/salesadd/:id', checkAuth, SalesController.productsSales)
router.get('/salesadd', checkAuth, SalesController.salesAdd)
router.post('/salesadd', checkAuth, SalesController.salesAddSave)
router.get('/sales', checkAuth, SalesController.AllSales)
router.get('/salesupdate/:id', checkAuth, SalesController.updatesales)
router.post('/salesupdate', checkAuth, SalesController.UpdateSalesSave)
router.post('/delete', checkAuth, SalesController.deletesales)







module.exports = router