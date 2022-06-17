const Clients = require('../models/Clients')

module.exports = class clientsController {
    static clients(req, res) {
        res.render('clients/clients')
    }

    static clientsadd(req, res) {
        res.render("clients/clientsadd")
    }
    
    static async clientsaddsave(req,res){
        const clients = {
            name: req.body.name,
            cpf: req.body.cpf,
            rg: req.body.rg,
            sex: req.body.sex,
            phone: req.body.phone,
            email: req.body.email
        }

        try {
            await Clients.create(clients)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/clients")
    }

    static async allclients(req,res){
        const clients = await Clients.findAll({raw:true})
        res.render("clients/clients",{clients})
    }

    static async clientsUpdate(req,res){
        const id = req.params.id
        const clients = await Clients.findOne({where:{id:id},raw:true})
        res.render("clients/clientsUpdate",{clients})
    }

    static async clientsUpdatesave(req,res){
        const id = req.body.id
        const clients = {
            name: req.body.name,
            cpf: req.body.cpf,
            rg: req.body.rg,
            sex: req.body.sex,
            phone: req.body.phone,
            email: req.body.email,
        }
        try {
            await Clients.update(clients,{where:{id:id}})
        } catch (error) {
            console.log(error)
        }
        res.redirect("/clients")
    }

    static async clientsdelete (req,res){
        const id = req.body.id;
        await Clients.destroy({where:{id:id}})

        res.redirect("/clients")
    }

}