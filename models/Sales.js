const {DataTypes}  = require("sequelize")
const Clients = require("../models/Clients")
const Products = require("../models/Products")

const db = require("../db/conn")

const Sales = db.define("sales",{
    description:{
        type:DataTypes.STRING,
        require:true
    },
   amount:{
        type:DataTypes.STRING,
        require:true
    },
    price:{
        type:DataTypes.STRING,
        require:true
    },
    total:{
        type:DataTypes.STRING,
        require:true
    },
})


Sales.belongsTo(Products)

module.exports  = Sales