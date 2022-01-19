const 
const jwt = require("jsonwebtoken");

module.export = {
  verifyToken: (req, res, next) => {
    jwt.sign(payload, process.env.JWT_SECRET);
    next();
  },
};
