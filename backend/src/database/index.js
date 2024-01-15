const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ganuuhu:Ganbold0818!@cluster0.50i5m04.mongodb.net/finance_app"
    );
    console.log("Connected to Database succesfully");
  } catch (error) {
    console.log(error, "error");
  }
};

module.exports = {
  connectToDatabase,
};
