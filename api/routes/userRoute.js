// Import Section
const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUser,
  updatePassword,
  adminAllUser,
  adminGetSingleUser,
  adminUpdateRole,
  adminUserDelete,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// All User Part

// Register User
router.post("/register", registerUser);
// Login User
router.post("/login", loginUser);
// Logout
router.get("/logout", logOut);
// Forgot Password
router.post("/password/forgot", forgotPassword);
// Reset Password
router.put("/password/reset/:token", resetPassword);
// Get User Details
router.get("/me",isAuthenticatedUser, getUserDetails)
// Update Password
router.put("/password/update",isAuthenticatedUser,updatePassword)
// Update User
router.put("/me/update", isAuthenticatedUser, updateUser)

// Only Admin Part
// Get All User (Admin)
router.get("/admin/users",isAuthenticatedUser,authorizeRoles("admin"),adminAllUser)
// Get single User (Admin)
router.get("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),adminGetSingleUser)
// Update User (Admin)
router.put("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),adminUpdateRole)
// Delete USer (Admin)
router.delete("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),adminUserDelete)

module.exports = router;
