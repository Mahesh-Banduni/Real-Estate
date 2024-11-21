const mongoose = require("mongoose");

const amenitiesSchema = new mongoose.Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
});

module.exports = amenitiesSchema;
