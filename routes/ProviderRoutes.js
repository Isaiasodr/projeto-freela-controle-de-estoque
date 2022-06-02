const express = require('express')
const router = express.Router()
const ProviderController = require('../controllers/ProviderController')

router.get('/providers',ProviderController.providersAll)
router.get('/provideradd',ProviderController.provideradd)
router.post('/provideradd',ProviderController.providerasave)
router.get('/providerupdate/:id',ProviderController.providersUpdate)
router.post('/providerupdate',ProviderController.providersUpdateSave)
router.post('/deleteprovider',ProviderController.deleteProvider)





module.exports = router