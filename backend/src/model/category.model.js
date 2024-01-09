const { default: mongoose } = require("mongoose");

const Category = mongoose.model("category", {
  name: String,
  icon: Number,
  color: String,
});

module.exports = {
  Category,
};
