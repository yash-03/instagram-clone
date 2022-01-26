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
  login: async (username, password) => {
    const record = await userModel.findOne({ "profile.email": username });
    if (record) {
      const isMatch = await helpers.compare(password, record?.password);
      if (!isMatch) {
        return { errors: "Password is incorrect!" };
      }
      const token = helpers.generateToken({
        userId: record?._id,
      });
      return { token, user: record };
    } else {
      return { errors: "Username is incorrect!" };
    }
  },
  authUser: async (userId) => {
    return await userModel.find({ _id: userId });
  },
};
