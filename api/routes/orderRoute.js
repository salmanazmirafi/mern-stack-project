const { newOrder } = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = require("express").Router();

// New Order
router.post("/order/new",isAuthenticatedUser, newOrder);
// Get Single Order
router.get("/order/id");
// My Order
router.get("/order/me");

// Get All Order (admin)
router.get("/admin/orders");
// Update Order (admin)
router.put("/admin/order/id");
// Delete Order (admin)
router.delete("/admin/order/id");

module.exports = router;
