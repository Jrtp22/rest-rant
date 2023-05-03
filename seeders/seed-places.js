const db = require('../models')
db.Place.create([{
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
}])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})
