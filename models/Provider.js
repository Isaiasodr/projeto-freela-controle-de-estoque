const {DataTypes}  = require("sequelize")

const db = require("../db/conn")

const Provider = db.define("provider",{
    name:{
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
    }
})

module.exports  = Provider