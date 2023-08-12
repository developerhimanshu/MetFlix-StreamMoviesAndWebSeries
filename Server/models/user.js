const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
  },
  email: {
    type: String,
    required: [true, "Please Provide email"],
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
  },
});

module.exports = mongoose.model("User", UserSchema);
