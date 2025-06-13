# Car Rental System

## Overview
This project is a fully functional Car Rental System web application built using HTML, CSS, and JavaScript on the frontend, and Node.js, Express.js, and MongoDB on the backend. The application allows users to browse available cars, book a car with one click, and view a booking confirmation page, all handled via RESTful APIs and dynamic DOM updates.

## Key Features
- Browse car listings with name, brand, price, and image.
- Book any unbooked car directly from the homepage.
- Booking updates reflected in the database using POST API.
- Built using REST API architecture (no template engines).
- Clean frontend design with modular CSS and JS logic.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Architecture:** RESTful APIs, MVC structure

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd car-rental-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the Car Rental System.

## Usage
- Users can view available cars on the homepage.
- Click on the "Book" button to reserve a car.
- A booking confirmation will be displayed upon successful booking.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.