const React = require('react')
const Def = require('../default')

function show (data, index) {
    return (
      <Def>
        <main>
        <div className="col-sm-6">
        <h2>
        <a >
          {data.place.name}
        </a>
        </h2>
        <p className="text-center">
        They serve: {data.place.cuisines}
        </p>
        <img src={data.place.pic} alt={data.place.name} />
        <p className="text-center">
          Located in {data.place.city}, {data.place.state}
        </p>
      </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </main>
      </Def>
    );
}

module.exports = show

