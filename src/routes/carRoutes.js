const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.get('/', carController.getAllCars);

// Book a car
router.post('/:carId/book', carController.bookCar);

// Add a new car (for testing/initial setup)
router.post('/', carController.addCar);

module.exports = router;