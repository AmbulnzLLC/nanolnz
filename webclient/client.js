var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
})

const PORT_NUMBER = process.env.PORT_NUMBER || 5555;
console.log('set to listen on port', PORT_NUMBER);
server.listen(PORT_NUMBER);
