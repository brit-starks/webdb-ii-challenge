const express = require('express');

const router = express.Router();

const carsdb = require('../data/db-config.js');


router.use(express.json());

router.get('/', (req, res) => {
  carsdb('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);
        res.status(500).json({
          message: 'Error retrieving cars',
        });
    });
});

router.post('/', (req, res) => {
	const newCar = req.body;
    carsdb('cars').insert(newCar).into('cars')
        .then(car => {
					res.status(201).json(car)
				})
				.catch(err => {
					res.status(500).json({
						error: err,
						message: 'failed to add car info'
					})
				})
})

module.exports = router;