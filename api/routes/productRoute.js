const {
  createProduct,
  getAllProduct,
  getAdminProduct,
  getProductDetails,
  productUpdate,
  productDelete,
} = require("../controllers/productController");

const router = require("express").Router();
// Crate Product Route (Admin)
router.post("/product/new", createProduct);
// Get All Product Route
router.get("/products", getAllProduct);
// Get All Product Route (Admin)
router.get("/admin/products", getAdminProduct);
// Product Details Route
router.get("/product/:id", getProductDetails);
// Product Route (Admin)
router.put("/admin/product/:id", productUpdate);
// Admin Delete Product Route
router.delete("/admin/product/:id", productDelete);

module.exports = router;
