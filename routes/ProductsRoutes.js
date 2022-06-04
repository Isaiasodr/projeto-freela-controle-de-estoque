const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const ProductsController = require('../controllers/ProductsController')

router.get('/productsadd',checkAuth, ProductsController.productsadd)
router.post('/productsadd',checkAuth,ProductsController.productsaddsave)
router.get('/inventory',checkAuth,ProductsController.inventory)
router.get('/productsupdate/:id',checkAuth,ProductsController.productsupdate)
router.post('/productsupdatesave',checkAuth,ProductsController.productsupdatesave)
router.post('/delete:id',checkAuth,ProductsController.deleteproducts)



module.exports = router