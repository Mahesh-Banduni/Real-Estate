const mongoose= require("mongoose");
const industrialLandSchema = new mongoose.Schema({
  //Property Location
  city: {type: String, required: true},
  locality: {type: String, required: true},
  Address: {type: String, maxlength: 256},

  //Property Features
  floorsAllowed: {type: Number},
  openSides: {type: Number},
  facingRoadWidth: {type: Number},
  boundaryWallMade: {type: Boolean},
  anyConstructionDone: {type: Boolean},

  //Property Area
  plotArea: { type: Number, required: true },
  areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
  lengthdimension: { type: Number, required: true },
  widthdimension: { type: Number, required: true },
  cornerPlot: {type: Boolean},

  //Price Details
  expectedPrice: {type: Number, required: true},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean},

  //Other Details
  overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
  facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
  approvedBy: {type: String, enum: ["MDDA"]},
  plotType:  { type: String, enum: ["Commercial","Residential","Agriculture","Industrial"], required: true },
  status: {type: String, enum: ["Ready To Move", "Under Construction"], required: true},
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
  transactionType: { type: String, enum: ["New Property","Resale"], required: true},
  features: {type: String},

  //legal Document Status
  titleDeed: {type: Boolean},
  previousOwnerTitleDeedAvailable: {type:Boolean},
  revenueDocument: {type: Boolean},
  encumberenceCertificate: {type: Boolean},
  conversionCertificate: {type: Boolean},
  
  //Civic Infrastructure Details
  waterConnection: {type: Boolean},
  electricityConnection: {type: Boolean},
  sewageConnection: {type: Boolean},
  roadAvailable: {type: Boolean},
  });

const IndustrialLand = mongoose.model("IndustrialLand", industrialLandSchema);
module.exports = IndustrialLand;
