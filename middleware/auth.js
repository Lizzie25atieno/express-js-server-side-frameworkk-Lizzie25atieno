// Check if the request has a valid API key in its headers before letting it access certain routes.

const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== process.env.AUTH_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }

  next();
};

module.exports = auth;


