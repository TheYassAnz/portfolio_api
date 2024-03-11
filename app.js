// import express
const express = require('express');

// create an express app
const app = express();

// simple middleware
app.use((req, res) => {
    res.json({ message: 'Hello World!' });
})

// export the express app
module.exports = app;