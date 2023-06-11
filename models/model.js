const mongoose = require('mongoose');

//initialize a teacherSchema variable that represents the Mongoose schema for the teacher collection 
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    subjects: {
        type: String,
        required: true,
    },

});

//we define timetableSchema and initiaize it with the mongoose Schema for the timetable collection
const timetableSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
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

//create mongoose models for teacher and timetable based on the provided Schemas. This models will be used to perform CRUD operations on the Teacher and Timetable collection in the MongoDB database

const Teacher = mongoose.model('Teacher', teacherSchema);
const Timetable = mongoose.model('Timetable', timetableSchema);

//export the Teacher and Timetable to be used in the index.js file

module.exports = { Teacher, Timetable };
