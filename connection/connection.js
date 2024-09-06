const mongoose = require("mongoose");
const { DB_NAME } = require("../constant");

const connectDb = async () => {
  try {
   const connection =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err.message}`);
  });

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to application termination.");
    process.exit(0);
  });
};

module.exports = connectDb;
