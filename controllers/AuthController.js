const User = require('../models/User')
const bcrypt = require('bcrypt')
module.exports = class UserControllers {

    static async login(req, res) {
        res.render('auth/login')
    }
    static async loginPost(req, res) {
        const { name, password } = req.body

        const user = await User.findOne({ where: { name:name } })
        if (!user) {
            req.flash('message', 'usuário e/ou senha estão incorretos')
            res.render('auth/login')
        }
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) {
            req.flash('message', 'usuário e/ou senha estão incorretos')
            res.render('auth/login')
            return

        }
        req.session.userid = user.id
        req.flash('message', 'autenticação realizada com sucesso!')
        req.session.save(() => {
            res.redirect('/')
        })

    }

    static adduser(req, res) {
        res.render('auth/register')
    }
    static async adduserSave(req, res) {
        const { name, password, confirmpassword } = req.body
        if (password != confirmpassword) {
            req.flash('message', "senhas não conferem, favor tentar novamente!")
            res.render('auth/register')
            return
        }
        const checkIfUserExists = await User.findOne({ where: { name: name } })
        if (checkIfUserExists) {
            req.flash('message', 'o e-mail já está em uso!')
            res.render('auth/register')
            return
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedpassword = bcrypt.hashSync(password, salt)
        const user = {
            name,
            password: hashedpassword
        }
        try {
            const createdUser = await User.create(user)
            req.session.userid = createdUser
            req.flash('message', 'cadastro realizado com sucesso!')
            req.session.save(() => {
                res.redirect('/')
            })
        } catch (err) {
            console.log(err)
        }

    }
    static logout(req,res){
        req.session.destroy()
        res.redirect('/login')
    }

    
}