const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
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
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//create
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
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
