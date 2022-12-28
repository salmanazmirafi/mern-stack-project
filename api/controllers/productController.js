const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Crate Product (Admin)
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const newProduct = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    newProduct,
  });
});
// Get All Product
exports.getAllProduct = catchAsyncErrors(async (req, res, next) => {
  const findAll = await productModel.find();

  res.status(200).json({
    success: true,
    findAll,
  });
});
// Get All Product (Admin)
exports.getAdminProduct = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;
  const productCount = await productModel.countDocuments();

  const apiFeature = new ApiFeatures(productModel.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  const findAll = await apiFeature.query;

  res.status(200).json({
    success: true,
    findAll,
    productCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const productDetails = await productModel.findById(req.params.id);
  if (!productDetails) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    productDetails,
  });
});

// Get All Product (Admin)
exports.productUpdate = catchAsyncErrors(async (req, res, next) => {
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
});
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
});
// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await productModel.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});
// Get All Reviews a products
exports.getProductReviews = catchAsyncErrors(async(req,res,next)=>{
  const product = await productModel.findById(req.query.id)

  if(!product){
    return next(new ErrorHandler("Product not found",404))
  }

  res.status(200).json({
    success:true,
    reviews : product.reviews
  })
})