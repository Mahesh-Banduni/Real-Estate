const mongoose = require("mongoose");

const auctionPropertySchema = new mongoose.Schema({
  propertyId: { type: String, required: true },
  propertyType: {
    type: String,
    enum: ["Residential", "Commercial", "Industrial", "Agriculture", "Others"],
    required: true,
  },
  propertyArea: {type: Number, required: true },
  address: {type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  reservePrice: { type: String, required: true },
  EMD: {type: Number, required: true },
  auctionStartDate: { type: Date, format:'', default: Date.now },
  auctionEndDate: { type: Date, default: Date.now },
},{timestamps: true});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
