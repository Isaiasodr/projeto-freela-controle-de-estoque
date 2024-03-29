const express = require("express")
const exphbs = require('express-handlebars')
const app = express()
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require("./db/conn")
const authRoutes = require('./routes/authRoutes')
const productsRoutes = require('./routes/ProductsRoutes')
const ClientsRoutes = require("./routes/ClientsRoutes")
const ProviderRoutes = require("./routes/ProviderRoutes")
const salesRoutes = require("./routes/salesRoutes")
const authController = require('./controllers/AuthController')

const port = process.env.PORT || 3000;

const cls = require("cls-hooked");
const namespace = cls.createNamespace("....");
const Sequelize = require("sequelize");

Sequelize.useCLS(namespace);

/* models */
const User = require("./models/User")
const Products = require("./models/Products")
const Clients = require("./models/Clients")
const Provider = require("./models/Provider")
const Sales = require("./models/Sales")




//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())




app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new fileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),

        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httponly: true
        }

    }),
)
// flash messages
app.use(flash())


//set session to res
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next()
})
app.use(express.static(__dirname + '/public'));
/* rotas */
app.use('/', authRoutes)
app.use('/',productsRoutes)
app.use('/',ClientsRoutes)
app.use('/',ProviderRoutes)
app.use('/',salesRoutes)


app.get("/",(req,res)=>{
    res.render("home")
})


conn.sync(/* {force:true} */)
.then(()=>{
    app.listen(port)
})
.catch((error)=> console.log(error))
