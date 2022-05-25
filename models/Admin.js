const bcrypt = require("bcrypt")
const {DataTypes}  = require("sequelize")

const db = require("../db/conn")

const Admin = db.define("admin",{
    user:{
        type:DataTypes.STRING,
        require:true
    },
    password:{
        type:DataTypes.STRING,
        require:true
    }
})
/* const password = '1234'
const salt = bcrypt.genSaltSync(10)
const hashedPassword = bcrypt.hashSync(password, salt)

const admin = Admin.create({user:'Dália',password:hashedPassword}) */

module.exports = Admin