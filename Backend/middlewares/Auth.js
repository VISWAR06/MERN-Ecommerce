const jwt = require('jsonwebtoken'); 
module.exports = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token not provided or malformed');
    }

    const token = authHeader.replace('Bearer ', '');
const decoded = jwt.verify(token, process.env.SECRET_KEY); req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: e.message || 'Unauthorized' });
  }
};
