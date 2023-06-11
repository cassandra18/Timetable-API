require('dotenv').config()
const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');

//custom imports
const connectDatabase = require('./config/db');
const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./middleware/errorHandler');
//connect to database
connectDatabase();  //this will connect to database


//inbult middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(bodyParser.json());


//routes
api.use('/api/teacher', require('./routes/teacher.route'));
api.use('/api/timetable', require('./routes/timetable.route'));


api.use(errorHandler);

api.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.yellow.bold)
    console.log('attempting to connect to mongodb database...'.dim)
});

mongoose.connection.once('open', () => {
    console.log(`connected to mongodb database at: ${mongoose.connection.host}`.green.bold)
});

mongoose.connection.on('error', (err) => {
    console.log(`error: ${err.message}`.red.bold)
});
