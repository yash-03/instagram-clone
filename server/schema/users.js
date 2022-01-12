const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    profile: {
      firstName: String,
      lastName: String,
      mobile: String,
      email: String,
    },
    password: String,
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = userSchema;
