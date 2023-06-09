const React = require('react')

function Def (props) {
    return (
        <html>
            <head>
                <title>My Places</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
            </head>
            <body className="bg-info">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                <div className='container'>{props.children}</div>
            </body>
        </html>
    )
}

module.exports = Def
