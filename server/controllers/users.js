const userModel = require("../models/users");
const helpers = require("../helpers/general-helpers");

module.exports = {
  register: async (record) => {
    const password = await helpers.encrypt(record.password);
    const newRecord = {
      ...record,
      password,
    };
    const user = new userModel(newRecord);
    return await user.save();
  },
};
