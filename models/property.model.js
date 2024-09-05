const mongoose = require("mongoose");

// const propertyAddressSchema = new mongoose.Schema({
//   city: { type: String, required: true },
//   address: { type: String },
//   pincode :{
//     type: Number,
//     require: true,
//   }
// });

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ["house", "apartment", "commercial"],
    required: true,
  },
  price: { type: Number, required: true },
  location: {
    city: { type: String, required: true },
    address: { type: String },
    pincode: { type: Number, require: true },
  },
  images: [{ type: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  features: [{ type: String }],
  inquiries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Inquiry" }],
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
