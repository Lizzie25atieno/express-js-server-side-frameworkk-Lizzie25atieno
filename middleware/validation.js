// // middleware/validation.js
const { ApiError } = require('../utils/error');

const validateProduct = (req, res, next) => {
  const { name, description, price, category } = req.body;
  const errors = [];

  if (!name) errors.push('Name is required');
  if (!description) errors.push('Description is required');
  if (price == null || isNaN(price)) errors.push('Price must be a number');
  if (!category) errors.push('Category is required');

  if (errors.length > 0) {
    return next(new ApiError(400, 'Validation failed', errors));
  }

  next();
};

module.exports = { validateProduct };
