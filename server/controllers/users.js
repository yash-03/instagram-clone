const userModel = require("../models/users");

module.exports = {
  register: async (record) => {
    const user = new userModel(record);
    return await user.save();
  },
};
