const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://images.unsplash.com/photo-1571244112823-db09c790e924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Gotham City' },
    state: { type: String, default: 'Gotham' },
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)






/* module.exports = [{
    name: 'Wayne Manor',
    city: 'Gotham City',
    state: 'Gotham',
    cuisines: 'What-ever Alfred feels like making',
    pic: '/images/fancy.jpg'
}, {
    name: 'Arkham Asylum',
    city: 'Arkham',
    state: 'Gotham',
    cuisines: 'Cafeteria food',
    pic: '/images/cafe.jpg'
}] */