const {
  createProduct,
  getAllProduct,
  getAdminProduct,
  getProductDetails,
  productUpdate,
  productDelete,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = require("express").Router();
// Crate Product Route (Admin)
router.post("/product/new",isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// Get All Product Route
router.get("/products", getAllProduct);
// Get All Product Route (Admin)
router.get("/admin/products",isAuthenticatedUser, authorizeRoles("admin"), getAdminProduct);
// Product Details Route
router.get("/product/:id", getProductDetails);
// Product Route (Admin)
router.put("/admin/product/:id",isAuthenticatedUser, authorizeRoles("admin"), productUpdate);
// Admin Delete Product Route
router.delete("/admin/product/:id",isAuthenticatedUser, authorizeRoles("admin"), productDelete);

module.exports = router;
