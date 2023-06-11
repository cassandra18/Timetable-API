const express = require('express');

const app = express();

//add express.json() using app.use. This will ensure that the JSON parsing middleware is applied to all incoming requests 
app.use(express.json());

module.exports = app;