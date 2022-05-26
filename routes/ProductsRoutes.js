const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/ProductsController')

router.get('/productsadd',ProductsController.productsadd)
router.post('/productsadd',ProductsController.productsaddsave)
router.get('/inventory',ProductsController.inventory)
router.get('/productsupdate/:id',ProductsController.productsupdate)
router.post('/productsupdatesave',ProductsController.productsupdatesave)
router.post('/delete:id',ProductsController.deleteproducts)



module.exports = router