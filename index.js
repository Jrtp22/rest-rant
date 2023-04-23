//express
require('dotenv').config();
const express = require('express');

//Initialize the app variable
const app = express();

app.use('/places', require('./controllers/places.js'))

//home route and 404
app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen
app.listen(process.env.PORT)