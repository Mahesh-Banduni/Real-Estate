const mongoose = require("mongoose");
const { DB_NAME } = require("../constant");

const express = require("express");

const app = express();

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    app.on("Error", (error) => {
      console.log(`Error, ${error}`);
      throw error;
    });
  } catch (error) {
    console.log(`MongoDb connection error ${error}`);
    process.exit(1);
  }
};

module.exports = connectDb;
