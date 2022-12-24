const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

// Crate Product (Admin)
exports.createProduct = catchAsyncErrors(async (req, res,next) => {
  const newProduct = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    newProduct,
  });
})
// Get All Product
exports.getAllProduct = catchAsyncErrors(async (req, res,next) => {
  const findAll = await productModel.find();

  res.status(200).json({
    success: true,
    findAll,
  });
})
// Get All Product (Admin)
exports.getAdminProduct = catchAsyncErrors(async (req, res) => {
  const findAll = await productModel.find();

  res.status(200).json({
    success: true,
    findAll,
  });
})

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res,next) => {
  const productDetails = await productModel.findById(req.params.id);
  if (!productDetails) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    productDetails,
  });
})

// Get All Product (Admin)
exports.productUpdate = catchAsyncErrors(async (req, res,next) => {
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
})
// Delete Product (Admin)
exports.productDelete = catchAsyncErrors(async (req, res, next) => {
  const findId = await productModel.findById(req.params.id);
  if (!findId) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await productModel.findByIdAndDelete(findId);
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
})