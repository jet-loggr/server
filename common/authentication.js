const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

const models = require("./helpers");

// Authentication middleware
const authenticate = async (req, res, next) => {
  const token = req.get("Authorization");
  try {
    if (token) {
      const decoded = jwtDecode(token);
      const user = await models.findBy("users", {
        email: decoded.email,
        sub: decoded.sub
      });

      if (user) {
        req.decoded = user;
        next();
      } else {
        res.status(401).json({ message: "You are not authorized" });
      }
    } else {
      res.status(401).json({ message: "You are not authorized" });
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  authenticate
};
