const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
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
      }]
      
    res.render('places/index.jsx', { places } )
})
router.get("/new", (req, res) => {
  res.render("places/new.jsx");
});


module.exports = router
