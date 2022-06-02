const Sales = require('../models/Sales')
const Products = require('../models/Products')


module.exports = class SalesController {

    static async productsSales(req,res){
        const id = req.params.id
        const products = await Products.findOne({where:{id:id},raw:true})
        res.render('sales/salesadd',{products})
    }
    static salesAdd(req, res) {
        res.render('sales/salesadd')
    }

    static async salesAddSave(req, res) {
        const sales = {
            description:req.body.description,
            amount: req.body.amount,
            price: req.body.price,
            total: req.body.amount*req.body.price,
            productId: req.body.product
        }
        try {
            await Sales.create(sales)
        } catch (error) {
            console.log(error)
        }
        

        res.redirect('/salesadd')
    }

    

}