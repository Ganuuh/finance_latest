const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ganaaganbold551:sZVwGxChafcIWkJU@ganuuh.d0inmac.mongodb.net/finance_app"
    );
    console.log("Connected to Database succesfully");
  } catch (error) {
    console.log(error, "error");
  }
};

module.exports = {
  connectToDatabase,
};
