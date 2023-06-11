const expressAsyncHandler = require('express-async-handler');
const Timetable = require('../models/timetable.schemas');
const Teacher = require('../models/teacher.shemas');

//add timetable
const addTimetable = expressAsyncHandler(async (req, res) => {

    const { teacherEmail, day, time, subject } = req.body;
    if (!teacherEmail || !day || !time || !subject) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const validateExistingTeacher = await Teacher.findOne({ teacherEmail });

    if (!validateExistingTeacher) {
        res.status(400);
        throw new Error('Teacher does not exist');
    }
    try {
        const timetable = await Timetable.create({
            teacherEmail,
            day,
            time,
            subject,
        });
        if (timetable) {
            res.status(201).json({
                _id: timetable._id,
                teacher: timetable.teacherEmail,
                day: timetable.day,
                time: timetable.time,
                subject: timetable.subject,
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }

});

const getTimetable = expressAsyncHandler(async (req, res) => {

    
});


module.exports = { addTimetable };
