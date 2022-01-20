const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const bearer = req.headers["authorization"];
    if (!bearer) {
      res.status(403).send("you are not authorized!");
    }
    const token = bearer.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      next();
    } catch (err) {
      res.status(401).send("Invalid token");
    }

    next();
  },
};
