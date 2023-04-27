//express
require('dotenv').config();
const express = require('express');


//Initialize the app variable
const app = express();
//middleware
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



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