const Products = require('../models/Products')


module.exports = class ProductsController {

    static async inventory(req, res) {
        const products = await Products.findAll({ raw: true })
        res.render('products/inventory', { products })
    }
    static productsadd(req, res) {
        res.render('products/productsadd')
    }

    static async productsaddsave(req, res) {
        const products = {
            date: req.body.date,
            name: req.body.name,
            marca: req.body.marca,
            size: req.body.size,
            model: req.body.model,
            amount: req.body.amount,
            cost: req.body.cost,
        }
        try {
            await Products.create(products)
        } catch (error) {
            console.log(errror)
        }
        res.redirect('/inventory')
    }

    static async productsupdate(req,res){
        const id = req.params.id
        const products = await Products.findOne({where:{id:id},raw:true})
        res.render('products/updateproducts',{products})
    }
    static async productsupdatesave(req,res){
        const id = req.body.id
        const products = {
            date:req.body.date,
            name:req.body.name,
            marca:req.body.marca,
            size:req.body.size,
            model:req.body.model,
            amount:req.body.amount,
            cost: req.body.cost
        }
        try {
            await Products.update(products,{where:{id:id}})
        } catch (error) {
            console.log(error)
        }
        
        res.redirect('/inventory')
    }
    static async deleteproducts(req,res){
        const id = req.body.id
        await Products.destroy({where:{id:id}})
        res.redirect('/inventory')
        
    }



}