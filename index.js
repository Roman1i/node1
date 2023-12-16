'use strict';

const http = require('http')
let homeVisits = 0
let aboutVisits = 0
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
            res.end(`
            <h1>Home Page</h1>
            <a href="/about">About</a>
            <p>${++homeVisits}</p>
            `)
            break
        case '/about':
            res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
            res.end(`
            <h1>About Page</h1>
            <a href="/">Home</a>
            <p>${++aboutVisits}</p>
            `)
            break
        default:
            res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
            res.end(`
            <h1>404</h1>
            <a href="/">Home</a>
            `)
            break
    }
})

const port = 3000
server.listen(port)
