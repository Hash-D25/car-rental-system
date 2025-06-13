const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Book a car
exports.bookCar = async (req, res) => {
    try {
        const { carId } = req.params;
        const { bookedBy } = req.body;

        const car = await Car.findById(carId);
        
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        if (car.isBooked) {
            return res.status(400).json({ message: 'Car is already booked' });
        }

        car.isBooked = true;
        car.bookingDetails = {
            bookedBy,
            bookingDate: new Date()
        };

        await car.save();
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new car (for testing/initial setup)
exports.addCar = async (req, res) => {
    try {
        const car = new Car(req.body);
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};