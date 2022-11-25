const express = require('express');
const router = express.Router();
const authcheck = require('../middleware/requireAuth')

router.get('/', authcheck, (req,res) => {
    user = req.user
    res.status(200).json(user)
});

module.exports = router;