const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String},
  type: {
    type: String,
    enum: ["Plot/Land", "Flat/Appartment", "Commercial Space", "House/Villa","Agricultural Land","Farm House"],
    required: true,
  },
  price: { type: String, required: true },
  images: [{ type: String }],
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },       
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});description, price, images, isAvailable

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;