const http = require('http');

// import express app
const app = require('./app');

// Set the port of app
app.set('port', process.env.PORT || 3000);

// Create a simple server 
const server = http.createServer(app);

// Listen on port 3000
server.listen(process.env.PORT || 3000);