const mongoose= require("mongoose");
const addressSchema = new mongoose.Schema({
    area: { type: String, required: true },
    locality: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
    latitude: { type: Number },
    longitude: { type: Number },
  });

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
