const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = require("express").Router();

// New Order
router.post("/order/new", isAuthenticatedUser, newOrder);
// Get Single Order
router.get("/order/:id", isAuthenticatedUser, getSingleOrder);
// My Order
router.get("/orders/me", isAuthenticatedUser, myOrders);

// Get All Order (admin)
router.get(
  "/admin/orders",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrders
);
// Update Order (admin)
router.put(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);
// Delete Order (admin)
router.delete(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

module.exports = router;
