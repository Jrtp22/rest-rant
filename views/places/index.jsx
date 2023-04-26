const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <h5>here is cool cat pic just for fun </h5>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>MY kind of places</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
module.exports = index
