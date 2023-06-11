const express = require('express');
const router = express.Router();
const { registerHandler } = require('../controllers/registerTeacher');


router.post('/register', registerHandler);

router.get('/getDetails', (req, res) => {
    res.status(200);
    res.json({
        message: 'Get Details Page'
    });
});

module.exports = router;
