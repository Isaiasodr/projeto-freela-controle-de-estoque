const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Products = db.define('products',{
    name:{
        type:DataTypes.STRING,
        require:true
    },
    marca:{
        type:DataTypes.STRING,
        require:true
    },
    size:{
        type:DataTypes.STRING,
        require:true
    },
    model:{
        type:DataTypes.STRING,
        require:true
    },
    amount:{
        type:DataTypes.TINYINT,
        require:true
    },
    cost:{
        type:DataTypes.STRING,
        require:true
    },
    total:{
        type:DataTypes.STRING,
        require:true
    }
})


module.exports = Products