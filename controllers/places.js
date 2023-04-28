const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index.jsx', { places } )
})



router.get("/new", (req, res) => {
  res.render("places/new.jsx");
});

//edit

router.get('/:id/edit', (req, res) => {
  res.render('places/edit' , {
    data: places[req.params.id], 
    index: req.params.id
  })
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  //console.log('id:', id); // log the value of `id` to the console
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    res.render('places/show', { place: places[id], id });
  }
});
//create
router.post('/', (req, res) => {
  //console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://images.unsplash.com/photo-1571244112823-db09c790e924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  }
  if (!req.body.city) {
    req.body.city = 'Gotham City'
  }
  if (!req.body.state) {
    req.body.state = 'Gotham'
  }
  places.push(req.body)
  res.redirect('/places')
})

//update
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  let updatedPlace = {...req.body};
  if (updatedPlace.image === ""){
    updatedPlace.image = "https://images.unsplash.com/photo-1571244112823-db09c790e924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=9"
  }
  if (updatedPlace.city === ""){
    updatedPlace.city = "Gotham City"
  }
  if (updatedPlace.state === ""){
    updatedPlace.state = "Gotham"
  }
  places[id] = updatedPlace;
  res.redirect(`/places/${id}`)
})

//delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  places.splice(id, 1);
  res.status(303).redirect("/places")
})


module.exports = router
