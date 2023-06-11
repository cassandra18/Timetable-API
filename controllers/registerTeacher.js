const expressAsyncHandler = require('express-async-handler');
const Teacher = require('../models/teacher.shemas');

const registerHandler = expressAsyncHandler(async (req, res) => {
    const { name, email, subjects } = req.body;
    if (!name || !email || !subjects) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    try {
        const avoidDuplicate = await Teacher.findOne({ email });
        if (avoidDuplicate) {
            res.status(400);
            throw new Error('Teacher already exists');
        }
        const teacher = await Teacher.create({
            name,
            email,
            subjects,
        });
        if (teacher) {
            res.status(201).json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                subjects: teacher.subjects,
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


//get all teachers
const getTeachers = expressAsyncHandler(async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.json(teachers);
    } catch (error) {
        res.status(500)
        throw new Error(error);
    }
});

module.exports = { registerHandler, getTeachers };
