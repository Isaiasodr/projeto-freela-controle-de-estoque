const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const clientsController = require('../controllers/clientsController')

router.get('/clients', clientsController.allclients)
router.get('/clientsadd',clientsController.clientsadd)
router.post('/clientsadd',clientsController.clientsaddsave)
router.get('/clientsupdate/:id',clientsController.clientsUpdate)
router.post('/clientsUpdateSave',clientsController.clientsUpdatesave)
router.post('/clientsRemove/:id',clientsController.clientsdelete)





module.exports = router