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

// simple middleware
app.use((req, res) => {
    res.json({ message: 'Hello World!' });
})

// export the express app
module.exports = app;