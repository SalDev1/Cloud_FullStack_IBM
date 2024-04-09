import http from 'http'
import EventEmitter from 'events'
import fs from 'fs'

const server = http.createServer()

console.log(server instanceof EventEmitter)

// This is based on handling the GET Requests.
// This is standard request event, we can't change it. 
server.on('request' , (req, res) => {
    // req is of type 'Client-Request'.
    // res is of type 'Client-Response'.

    switch(req.url) {
        // Building a web server for different url.
        case '/home':
            res.writeHead(200,{'content-type':'text/plain'})

            res.write("Message From Server")
            res.end()    // Commits your response , otherwise it won't work.
            break

        case '/api':
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify([
                {name:'Iphone15',price:75456.5},
                {name:'OnePlus12',price:55456.5}
            ]))
            break

        case '/about':
        case '/news':
            res.writeHead(200,{'content-type':'text/html'}) // Write only allows you to write.
            res.end(fs.readFileSync(`.${req.url}.html`))   /// Reading the HTML file.
            break

        case '/':
            res.writeHead(301,{'Location':'/home'})
            res.end()  // Write the response + Commit the permanent changes.
            break;

        default:
            res.writeHead(404)
            res.end()
    }
})
// It binds the server to the port no and it says that the server is started. 
server.listen(9090,()=> {
    console.log('Server started')
})