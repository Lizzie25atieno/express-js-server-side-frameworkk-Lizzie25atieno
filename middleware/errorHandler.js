// Catch all errors from routes or controllers and send user-friendly messages.

const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.message);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
  });
};

module.exports = errorHandler;
