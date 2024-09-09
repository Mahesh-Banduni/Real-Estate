const mongoose= require("mongoose");
const plotSchema = new mongoose.Schema({
    plotArea: { type: String, required: true },
    dimension: { type: String, required: true },
    plotType:  { type: String, required: true },
    possession: { type: String, required: true },
    ownership: { type: String, required: true },
    floorsAllowed: {type: String},
    transactionType: { type: String, required: true },
    openSides: {type: Number, required: true},
    features: {type: String, required: true},
    boundaryWall: {type: String, required: true},
    facingRoadWidth: {type: String, required: true}
  });

const Plot = mongoose.model("Plot", plotSchema);
module.exports = Plot;
