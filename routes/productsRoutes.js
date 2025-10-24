// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productControllers');
const { validateProduct } = require('../middleware/validation');

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Protected routes (auth middleware is already used in server.js)
router.post('/', validateProduct, createProduct);
router.put('/:id', validateProduct, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
