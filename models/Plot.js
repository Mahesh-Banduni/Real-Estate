const mongoose= require("mongoose");
const plotSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  plotArea: { type: String, required: true },
  dimension: { type: String, required: true },
  plotType:  { type: String, enum: ["Commercial","Residential","Agriculture","Industrial"], required: true },
  possession: { type: String, required: true },
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
  floorsAllowed: {type: String},
  transactionType: { type: String, enum: ["New Property","Resale"]},
  openSides: {type: Number, required: true},
  features: {type: String, required: true},
  boundaryWall: {type: String, required: true},
  facingRoadWidth: {type: String, required: true},
  });

const Plot = mongoose.model("Plot", plotSchema);
module.exports = Plot;
