// Import Section
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");

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

  sendToken(user, 200, res);
});
// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
// Logout
exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
// Forgot Password
// Reset Password
// Get User Details
// Update User
// Update Password

// Only Admin Part
// Get All User (Admin)
// Get single User (Admin)
// Update User (Admin)
// Delete USer (Admin)
