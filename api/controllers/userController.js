// Import Section
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const userModel = require("../models/userModel");

// All User Part
// Register User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const myAccount = await userModel.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatar",
      url: "avatar.jpg",
    },
  });

const token = myAccount.getJWTToken()

  res.status(201).json({
    success:true,
    token
});
});
// Login User
// Forgot Password
// Reset Password
// Logout
// Get User Details
// Update User
// Update Password

// Only Admin Part
// Get All User (Admin)
// Get single User (Admin)
// Update User (Admin)
// Delete USer (Admin)
