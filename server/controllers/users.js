const userModel = require("../models/users");
const helpers = require("../helpers/general-helpers");

module.exports = {
  register: async (record) => {
    const password = await helpers.encrypt(record.password);
    const newRecord = {
      ...record,
      password,
    };
    const token = helpers.generateToken({
      username: record.username,
      password,
    });
    const user = new userModel(newRecord);
    const result = await user.save();
    return { token, user: result };
  },
};
