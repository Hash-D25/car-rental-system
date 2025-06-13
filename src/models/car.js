const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    bookingDetails: {
        bookedBy: String,
        bookingDate: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);