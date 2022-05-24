const {Sequelize}  = require("sequelize")

const sequelize = new Sequelize('inventory','root','',{
    host:'localhost',
    dialect:"mysql",
})

try {
    sequelize.authenticate()
    console.log("conectado ao banco")
} catch (error) {
    console.log(`erro ao conectar, ${error}`)
}

module.exports = sequelize