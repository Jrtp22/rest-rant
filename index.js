// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')



//Initialize the app variable
const app = express();
//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))




//home route and 404
app.use('/places', require('./controllers/places.js'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//listen
app.listen(process.env.PORT)