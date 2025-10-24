class ApiError extends Error {
  constructor(statusCode, message, errors = null) {
    super(message);
    this.statusCode = statusCode || 500;
    this.errors = errors; // optional extra errors (e.g. validation details)
  }
}

const handleErrorResponse = (res, err) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Server Error',
    errors: err.errors || null
  });
};

module.exports = { ApiError, handleErrorResponse };
