const express = require('express');
const router = express.Router();

const { addTimetable } = require('../controllers/addTimetable');


router.post('/addTimetable', addTimetable);


module.exports = router;
