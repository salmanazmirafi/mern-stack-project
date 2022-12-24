const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
// Use Middleware
const app = express();
dotenv.config();
app.use(express.json());

// Route Import
const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");

// Route Middleware
app.use("/api/v1", product);
// app.use('/api/v1')
// app.use('/api/v1')
// app.use('/api/v1')

// Database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", (err, res) => {
  console.log("Database connected");
});

// Server Listing
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT} !`);
});

// Middleware for Errors
app.use(errorMiddleware);

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
