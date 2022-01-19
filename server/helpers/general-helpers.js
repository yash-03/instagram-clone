const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

module.exports = {
  encrypt: async (password) => {
    try {
      return await bcrypt.hash(password, saltRounds);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  },
  compare: async (password, hash) => {
    try {
      const match = await bcrypt.compare(password, hash);
      if (match) {
        return true;
      }
      return false;
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  },
  generateToken: (user) => {
    return jwt.sign(user, process.env.JWT_SECRET);
  },
};
