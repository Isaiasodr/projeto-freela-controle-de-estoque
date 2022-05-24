const express = require("express")
const exphbs = require('express-handlebars')
const app = express()
const conn = require("./db/conn")
const authRoutes = require('./routes/authRoutes')


app.use(express.static(__dirname + '/public'));

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use('/', authRoutes)





conn.sync()
.then(()=>{
    app.listen(3000)
})
.catch((error)=> console.log(error))
