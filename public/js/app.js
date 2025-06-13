// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const closeModal = document.querySelector('.close');

let selectedCarId = null;

// Fetch and display cars
async function fetchCars() {
    try {
        const response = await fetch('/api/cars');
        const cars = await response.json();
        displayCars(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
}

// Display cars in the grid
function displayCars(cars) {
    carsGrid.innerHTML = '';
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-details">
                <h3>${car.name}</h3>
                <p>${car.brand}</p>
                <p class="car-price">$${car.price}/day</p>
                <button 
                    class="btn-book" 
                    ${car.isBooked ? 'disabled' : ''}
                    onclick="openBookingModal('${car._id}')"
                >
                    ${car.isBooked ? 'Booked' : 'Book Now'}
                </button>
            </div>
        `;
        carsGrid.appendChild(carCard);
    });
}

// Open booking modal
function openBookingModal(carId) {
    selectedCarId = carId;
    bookingModal.style.display = 'block';
}

// Close booking modal
function closeBookingModal() {
    bookingModal.style.display = 'none';
    bookingForm.reset();
    selectedCarId = null;
}

// Handle booking form submission
async function handleBooking(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`/api/cars/${selectedCarId}/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookedBy: name
            })
        });

        if (response.ok) {
            alert('Booking successful!');
            closeBookingModal();
            fetchCars(); // Refresh the car list
        } else {
            const error = await response.json();
            alert(error.message || 'Booking failed. Please try again.');
        }
    } catch (error) {
        console.error('Error booking car:', error);
        alert('An error occurred. Please try again.');
    }
}

// Event Listeners
closeModal.addEventListener('click', closeBookingModal);
bookingForm.addEventListener('submit', handleBooking);
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        closeBookingModal();
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', fetchCars); 