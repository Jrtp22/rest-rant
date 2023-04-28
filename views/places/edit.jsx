const React = require('react')
const Def = require('../default')

function Edit({data, index}) {
    return (
        <Def>
            <h2>Edit a Place</h2>
            <form action={`/places/${index}?_method=PUT`} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={data.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input
                        type="text"
                        id="pic"
                        name="pic"
                        defaultValue={data.pic}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        defaultValue={data.city}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        defaultValue={data.state}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input
                        type="text"
                        id="cuisines"
                        name="cuisines"
                        defaultValue={data.cuisines}
                    />
                </div>
                <input className="btn btn-primary" type="submit" />
            </form>
        </Def>
    );
}

module.exports = Edit;