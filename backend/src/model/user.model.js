const { default: mongoose } = require("mongoose");

const User = mongoose.model("User", {
  Name: String,
  Email: String,
  Password: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = {
  User,
};
