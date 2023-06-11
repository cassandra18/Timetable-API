const mongoose = require('mongoose');

//we define timetableSchema and initiaize it with the mongoose Schema for the timetable collection
const timetableSchema = new mongoose.Schema({
    teacherEmail: {
        type: String,
        ref: 'Teacher',
    },
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
});

const Timetable = mongoose.model('Timetable', timetableSchema);
module.exports = Timetable;
