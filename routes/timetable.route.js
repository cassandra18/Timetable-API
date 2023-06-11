const express = require('express');
const router = express.Router();

const { addTimetable } = require('../controllers/addTimetable');
const { getTimetable } = require('../controllers/addTimetable');


router.post('/addTimetable', addTimetable);

router.get('/getTimetable', getTimetable);

module.exports = router;
