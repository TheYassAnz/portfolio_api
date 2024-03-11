// import express
const express = require('express');

// create an express app
const app = express();

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const introduction = {
    message: 'Welcome to the API',
    warning: 'This is a simple message from the server',
    owner: {
        name: 'John Doe',
        position: 'Full Stack Developer',
        company: 'John Doe\'s Company',
        contact: {
            mail: 'john@doe.com',
            phone: '123-456-7890',
            address: '1234 Main Street, New York, NY 10001',
        }
    }
};

// simple middleware
app.get('/api', (req, res) => {
    res.json(introduction);
})

// export the express app
module.exports = app;