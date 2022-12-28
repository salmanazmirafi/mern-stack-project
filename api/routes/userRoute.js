// Import Section
const router = require("express").Router();
const { registerUser, loginUser, logOut, forgotPassword } = require("../controllers/userController");

// All User Part

// Register User
router.post("/register", registerUser);
// Login User
router.post("/login", loginUser)
// Logout
router.get("/logout",logOut)
// Forgot Password
router.post("/password/forgot", forgotPassword)
// // Reset Password
// router.put("/password/reset/:token")

// // Get User Details
// router.get("/me")
// // Update Password
// router.put("/password/update")
// // Update User
// router.post("/me/update")

// Only Admin Part
// Get All User (Admin)
// Get single User (Admin)
// Update User (Admin)
// Delete USer (Admin)

module.exports = router;
