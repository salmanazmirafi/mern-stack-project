const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");

// Crate Product (Admin)
exports.createProduct = async (req, res) => {
  const newProduct = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    newProduct,
  });
};
// Get All Product
exports.getAllProduct = async (req, res) => {
  const findAll = await productModel.find();

  res.status(200).json({
    success: true,
    findAll,
  });
};
// Get All Product (Admin)
exports.getAdminProduct = async (req, res) => {
  const findAll = await productModel.find();

  res.status(200).json({
    success: true,
    findAll,
  });
};

// Get Product Details
exports.getProductDetails = async (req, res,next) => {
  const productDetails = await productModel.findById(req.params.id);
  if (!productDetails) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    productDetails,
  });
};

// Get All Product (Admin)
exports.productUpdate = async (req, res,next) => {
  const findId = await productModel.findById(req.params.id);
  if (!findId) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  const updateProduct = await productModel.findByIdAndUpdate(findId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    updateProduct,
  });
};
// Delete Product (Admin)
exports.productDelete = async (req, res, next) => {
  const findId = await productModel.findById(req.params.id);
  if (!findId) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await productModel.findByIdAndDelete(findId);
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};
