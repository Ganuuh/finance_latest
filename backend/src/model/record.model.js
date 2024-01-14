const { default: mongoose, Schema } = require("mongoose");

const recordSchema = new Schema(
  {
    category: { name: String, icon: String, color: String },
    amount: String,
    type: String,
    userId: mongoose.Schema.ObjectId,
  },
  { timestamps: true }
);
const Record = mongoose.model("records", recordSchema);

module.exports = {
  Record,
};
