const { default: mongoose } = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = {
  User,
};
