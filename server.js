// server.js - Starter Express server for Week 2 assignment

// Import required modules
require('dotenv').config(); // Load .env variables
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const productsRoutes = require('./routes/productsRoutes');
const auth = require('./middleware/auth');


// Initialize Express app
const app = express();


// Middleware setup
app.use(logger);
app.use(bodyParser.json());

// Connect to MongoDB Atlas
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

app.use('/api/products',auth, productsRoutes);


// Error handler (must be last)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 


















