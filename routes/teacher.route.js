const express = require('express');
const router = express.Router();



router.post('/register', (req, res) => {
    res.status(200);
    res.json({
        message: ' Teacher Registration Page'
    });
});

router.get('/getDetails', (req, res) => {
    res.status(200);
    res.json({
        message: 'Get Details Page'
    });
});

module.exports = router;
