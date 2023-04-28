const React = require('react')
const Def = require('../default')

function Edit({data, index}) {
    return (
        <Def>
            <h2>Edit a Place</h2>
            <form action={`/places/${index}?_method=PUT`} method="POST">
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input
                    className="form-group"
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={data.name}
                    />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input
                    className="form-group"
                        type="text"
                        id="pic"
                        name="pic"
                        defaultValue={data.pic}
                    />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input
                    className="form-group"
                        type="text"
                        id="city"
                        name="city"
                        defaultValue={data.city}
                    />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                    <input
                    className="form-group"
                        type="text"
                        id="state"
                        name="state"
                        defaultValue={data.state}
                    />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input
                    className="form-group"
                        type="text"
                        id="cuisines"
                        name="cuisines"
                        defaultValue={data.cuisines}
                    />
                </div>
                </div >
                <a className="col justify-content-center>">
                <input className="btn btn-primary" type="submit" />
                </a>
            </form>
        </Def>
    );
}

module.exports = Edit;