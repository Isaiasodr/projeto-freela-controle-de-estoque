const Provider = require('../models/Provider')


module.exports = class ProviderController {
    static providers(req, res) {
        res.render('provider/providers')
    }

    static provideradd(req, res) {
        res.render("provider/provideradd")
    }
    static async providerasave(req, res) {
        const provider = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
        }
        try {
            await Provider.create(provider)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/providers')
    }
    static async providersAll(req, res) {
        const providers = await Provider.findAll({ raw: true })
        res.render("provider/providers", { providers })
    }
    static async providersUpdate(req, res) {
        const id = req.params.id
        const provider = await Provider.findOne({ where: { id: id }, raw: true })
        res.render("provider/providersupdate", { provider })
    }
    static async providersUpdateSave(req, res) {
        const id = req.body.id
        const provider = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
        }
        try {
            await Provider.update(provider, { where: { id: id } })
        } catch (error) {
            console.log(error)
        }
        res.redirect('/providers')
    }
    static async deleteProvider(req, res) {
        const id = req.body.id
        await Provider.destroy({ where: { id: id } })
        res.redirect('/providers')

    }

}