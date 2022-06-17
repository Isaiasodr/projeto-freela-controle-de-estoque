const {Sequelize}  = require("sequelize")

const sequelize = new Sequelize('heroku_e49d759c836e2fd','be41ba90677c39','fdea28b9',{
    host:'us-cdbr-east-05.cleardb.net',
    dialect:"mysql",
})

try {
    sequelize.authenticate()
    console.log("conectado ao banco")
} catch (error) {
    console.log(`erro ao conectar, ${error}`)
}

module.exports = sequelize