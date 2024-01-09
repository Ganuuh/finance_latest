const { default: mongoose } = require("mongoose");

const Record = mongoose.model("records", {
  category: String,
  amount: String,
  type: String,
  dateFrom: Date,
  dateTo: Date,
  Email: String,
});

module.exports = {
  Record,
};
