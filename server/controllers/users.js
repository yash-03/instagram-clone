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
    const result = await user.save();
    const token = helpers.generateToken({
      userId: result?._id,
    });
    return { token, user: result };
  },
  authUser: async (userId) => {
    return await userModel.find({ _id: userId });
  },
};
