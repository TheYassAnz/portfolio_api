const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
    res.end('Hello World!');
})

// Listen on port 3000
server.listen(process.env.PORT || 3000);