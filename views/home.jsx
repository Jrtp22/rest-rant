const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>My Page</h1>
              <div>
      <img src="/images/batarang.jpg" alt="Batarang on wall" />
      <div id="batpic">
        Photo by <a href="https://unsplash.com/@actionvance">ActionVance</a> on <a href="https://unsplash.com/">Unsplash</a>
      </div>
    </div>
              <a href="/places">
                <button className="btn-primary">My Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
