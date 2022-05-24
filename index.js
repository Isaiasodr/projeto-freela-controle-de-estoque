const express = require("express")
const exphbs = require('express-handlebars')
const app = express()


app.use(express.static(__dirname + '/public'));

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/productsadd",(req,res)=>{
    res.render("products/productsadd")
})
app.get("/inventory",(req,res)=>{
    res.render("products/inventory")
})
app.get("/clients",(req,res)=>{
    res.render("clients/clients")
})
app.get("/clientsadd",(req,res)=>{
    res.render("clients/clientsadd")
})
app.get("/providers",(req,res)=>{
    res.render("provider/provideradd")
})
app.get("/login",(req,res)=>{
    res.render("auth/login")
})



app.listen(3000)