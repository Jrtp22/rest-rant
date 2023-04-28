const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
        They serve: {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Bat-Rant About</h1>
            <div className="row">
              {placesFormatted}
            </div>
            <a className="col d-flex justify-content-center" href="/places/new">
                <button className="btn btn-primary">Recommend Me Something</button>
              </a>
        </main>
    </Def>
  )
}

  
module.exports = index
