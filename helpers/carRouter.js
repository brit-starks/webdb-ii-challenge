const express = require('express');

const router = express.Router();

const carsdb = require('../data/db-config.js');


router.use(express.json());

router.get('/', (req, res) => {
    // console.log(req.query);
    carsdb('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving cars',
            });
        });
});

module.exports = router;