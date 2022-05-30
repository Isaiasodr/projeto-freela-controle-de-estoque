const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Clients = db.define('clients',{
    name:{
        type:DataTypes.STRING,
        require:true
    },
    cpf:{
        type:DataTypes.STRING,
        require:true
    },
    rg:{
        type:DataTypes.STRING,
        require:true
    },
    sex:{
        type:DataTypes.STRING,
        require:true
    },
    phone:{
        type:DataTypes.STRING,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        require:true
    },

})


module.exports = Clients