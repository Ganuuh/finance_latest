const { default: mongoose } = require("mongoose");

const Record = mongoose.model("records", {
  category: { name: String, icon: String, color: String },
  amount: String,
  type: String,
  dateFrom: Date,
  dateTo: Date,
  userId: mongoose.Schema.ObjectId,
});

module.exports = {
  Record,
};
