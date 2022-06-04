const express = require('express')
const router = express.Router()
const authController = require('../controllers/AuthController')

router.get('/login',authController.login)
router.post('/login',authController.loginPost)
router.get('/userRegister',authController.adduser)
router.post('/userRegister',authController.adduserSave)
router.get('/logout',authController.logout)



module.exports = router