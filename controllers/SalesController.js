const Sales = require('../models/Sales')
const Products = require('../models/Products')


module.exports = class SalesController {

    static async productsSales(req, res) {
        const id = req.params.id
        const products = await Products.findOne({ where: { id: id }, raw: true })
        res.render('sales/salesadd', { products })
    }
    static salesAdd(req, res) {
        res.render('sales/salesadd')
    }

    static async salesAddSave(req, res) {
        const sales = {
            amountproducts: req.body.amountproducts,
            description: req.body.description,
            amount: req.body.amount,
            price: req.body.price,
            total: req.body.amount * req.body.price,
            productId: req.body.product
        }
        if (sales.amount > sales.amountproducts) {
            req.flash('message', 'estoque indisponível')
            res.render('sales/salesadd')
            return
        } 

        await Sales.create(sales)
        

        res.redirect('/sales')
    }

    static async AllSales(req, res) {
        const sales = await Sales.findAll({ raw: true })
        res.render("sales/allsales", { sales })
    }
    static async updatesales(req, res) {
        const id = req.params.id
        const sales = await Sales.findOne({ where: { id: id }, raw: true })
        res.render("sales/updatesales", { sales })
    }
    static async UpdateSalesSave(req, res) {

        const id = req.body.id
        const sales = {

            description: req.body.description,
            amount: req.body.amount,
            price: req.body.price,
            total: req.body.amount * req.body.price,
            productId: req.body.productId
        }

        try {
            await Sales.update(sales, { where: { id: id } })
        } catch (error) {
            console.log(error)
        }
        res.redirect("/sales")
    }

    static async deletesales(req, res) {
        const id = req.body.id
        await Sales.destroy({ where: { id: id } })
        res.redirect('/sales')
    }



}