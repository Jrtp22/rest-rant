const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <div>
          <img src="/images/stormtrooper.jpg" alt="Stormtrooper walking in the desert" />
          <div id="underPic">
            Photo by <a href="https://unsplash.com/@danielkcheung">Daniel K Cheung</a> on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
        <p id="underPic">Oops, sorry, we can't find this page!</p>
        <a className="col d-flex justify-content-center" href="/">
          <button className="btn btn-danger">GO HOME</button>
        </a>
      </main>
    </Def>
  )
}


module.exports = error404
