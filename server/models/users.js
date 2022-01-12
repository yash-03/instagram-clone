const mongoose = require("mongoose");
const userSchema = require("../schema/users");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
