const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <body className="bg-info">
      
      <main>
        <h1>My Page</h1>
        <div>
          <img src="/images/batarang.jpg" alt="Batarang on wall" />
          <div id="underPic">
            Photo by <a href="https://unsplash.com/@actionvance">ActionVance</a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
{/*         <a className="col d-flex justify-content-center" href="/places">
          <button className="btn btn-primary">My Places Page</button>
        </a> */}
      </main>  
      </body>
    </Def>
  );
}
  

module.exports = home
