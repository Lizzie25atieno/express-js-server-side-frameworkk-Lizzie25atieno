// controllers/productController.js
const Product = require('../models/Products');
const { ApiError } = require('../utils/error');

// @desc Get all products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    next(error);
  }
};

// @desc Get a single product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new ApiError(404, 'Product not found');
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// @desc Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// @desc Update a product
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) throw new ApiError(404, 'Product not found');
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) throw new ApiError(404, 'Product not found');
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
