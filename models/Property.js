const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["plot", "flat", "commercialSpace","house", "officeSpace", "villa"],
    required: true,
  },
  address: {type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  price: { type: String, required: true },
  images: [{ type: String }],
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  inquiries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Inquiry" }],
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
