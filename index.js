const express = require("express")
const exphbs = require('express-handlebars')
const app = express()
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require("./db/conn")
const authRoutes = require('./routes/authRoutes')
const productsRoutes = require('./routes/ProductsRoutes')
const authController = require('./controllers/AuthController')



/* models */
const Admin = require("./models/Admin")
const Products = require("./models/Products")


app.use(express.static(__dirname + '/public'));

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
/* rotas */
app.use('/', authRoutes)
app.use('/',productsRoutes)


conn.sync(/* {force:true} */)
.then(()=>{
    app.listen(3000)
})
.catch((error)=> console.log(error))
