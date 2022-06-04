const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const ProviderController = require('../controllers/ProviderController')

router.get('/providers', checkAuth, ProviderController.providersAll)
router.get('/provideradd', checkAuth, ProviderController.provideradd)
router.post('/provideradd', checkAuth, ProviderController.providerasave)
router.get('/providerupdate/:id', checkAuth, ProviderController.providersUpdate)
router.post('/providerupdate', checkAuth, ProviderController.providersUpdateSave)
router.post('/deleteprovider', checkAuth, ProviderController.deleteProvider)





module.exports = router