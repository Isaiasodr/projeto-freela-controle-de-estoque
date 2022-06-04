const express = require('express')
const router = express.Router()
const checkAuth = require("../helpers/auth").checkAuth
const clientsController = require('../controllers/clientsController')

router.get('/clients',checkAuth, clientsController.allclients)
router.get('/clientsadd',checkAuth,clientsController.clientsadd)
router.post('/clientsadd',checkAuth,clientsController.clientsaddsave)
router.get('/clientsupdate/:id',checkAuth,clientsController.clientsUpdate)
router.post('/clientsUpdateSave',checkAuth,clientsController.clientsUpdatesave)
router.post('/clientsRemove/:id',checkAuth,clientsController.clientsdelete)





module.exports = router