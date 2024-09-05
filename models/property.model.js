const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  latitude: { type: Number }, // Optional for geolocation
  longitude: { type: Number }, // Optional for geolocation
});

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["house", "apartment", "commercial"],
    required: true,
  },
  price: { type: Number, required: true },
  location: { type: addressSchema, required: true },
  images: [{ type: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  features: [{ type: String }],
  inquiries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Inquiry" }],
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
