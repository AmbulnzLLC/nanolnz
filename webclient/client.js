var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));


const PORT_NUMBER = process.env.PORT_NUMBER || 5665;
console.log('set to listen on port', PORT_NUMBER);
app.listen(PORT_NUMBER);
