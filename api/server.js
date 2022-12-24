const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Use Middleware
const app = express();
dotenv.config();
app.use(express.json())

// Route Import
const product = require('./routes/productRoute')
const errorMiddleware = require("./middleware/error")

// Route Middleware
app.use('/api/v1', product)
// app.use('/api/v1')
// app.use('/api/v1')
// app.use('/api/v1')

// Database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  console.log("Database Error");
});
mongoose.connection.on("connected", (err, res) => {
  console.log("Database connected");
});

// Server Listing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT} !`);
});

// Middleware for Errors
app.use(errorMiddleware)