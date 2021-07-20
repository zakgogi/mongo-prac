const express = require('express');
const router = express.Router();
const Footballer = require("../models/footballers");

router.get('/', async (req, res) => {
    try {
        const footballers = await Footballer.all;
        res.json({footballers});
    } catch (err) {
        res.status(500).json({err});
    }
})

module.exports = router;