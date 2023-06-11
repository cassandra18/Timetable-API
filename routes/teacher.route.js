const express = require('express');
const router = express.Router();
const { registerHandler, getTeachers } = require('../controllers/registerTeacher');


router.post('/register', registerHandler);

router.get('/getDetails', getTeachers);
module.exports = router;
