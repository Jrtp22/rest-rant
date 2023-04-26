const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Wayne Manor',
        city: 'Gotham City',
        state: 'Gotham',
        cuisines: 'What-ever Alfred feels like making',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Arkham Asylum',
        city: 'Arkham',
        state: 'Gotham',
        cuisines: 'Cafeteria food',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index.jsx', { places } )
})

module.exports = router
