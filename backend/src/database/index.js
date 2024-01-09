const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ganaaganbold551:sZVwGxChafcIWkJU@ganuuh.d0inmac.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Connected succesfully");
  } catch (error) {
    console.log(error, "error");
  }
};

module.exports(connectToDatabase);
