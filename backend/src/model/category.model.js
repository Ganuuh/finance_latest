const { default: mongoose } = require("mongoose");

const Category = mongoose.model("category", {
  name: String,
  icon: Number,
  color: String,
  userId: mongoose.Schema.ObjectId,
});

module.exports = {
  Category,
};
