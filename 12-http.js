const http = require('http');



const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('welcome to our homepage')
    }
    // res.write('welcome to our homepage')
    // res.end()

    if (req.url === '/about') {
        res.end('here is our short history')
    }
    // res.end(`
    // <h1>oops!</h1>
    // <p>we can't seem to find the page you are looking for</p>
    // <a href="/">back home</a>
    // `)

    if (req.url === '/home') {
        res.end(`<h1>youre back again</h1>`)
    }

    else {
        res.end(`<h1>this is intended to be an error page</h1>
        <a href='/home'>just go back home </a> `) 
    }


    //return server
    
    
})

server.listen(5000)