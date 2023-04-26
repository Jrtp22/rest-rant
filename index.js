//express
require('dotenv').config();
const express = require('express');

//Initialize the app variable
const app = express();


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places.js'))

//home route and 404
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//listen
app.listen(process.env.PORT)