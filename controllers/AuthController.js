const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')

module.exports = class authController {
    static login(req, res) {
        res.render('auth/login')
    }

    static async loginPost(req, res) {
        const { user, password } = req.body

        //validação de usuário
        const admin = await Admin.findOne({ where: { user: user } })

        if (!admin) {
            req.flash('message', 'usuário e/ou senha incorreta!')
            res.render('auth/login')
        }
        //checar senha
        const passowrdMatch = bcrypt.compareSync(password, admin.password)
        if (!passowrdMatch) {
            req.flash('message', 'usuário e/ou senha incorreta!')
            res.render('auth/login')
            return
        }
        //logar usuário
        req.session.userid = user.id
        req.flash('message', 'autenticação realizada com sucesso!')
        req.session.save(() => {
            res.redirect('/')
        })
    }

}