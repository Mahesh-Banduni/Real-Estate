const mongoose= require("mongoose");
const agriculturePlotSchema = new mongoose.Schema({
  //Property Location
  city: {type: String, required: true},
  locality: {type: String, required: true},
  Address: {type: String, maxlength: 256},
  
  //Property Features
  floorsAllowed: {type: Number},
  openSides: {type: Number},
  facingRoadWidth: {type: Number},
  boundaryWall: {type: Boolean, default: false},

  //Property Area
  plotArea: { type: Number, required: true },
  areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
  lengthdimension: { type: Number, required: true }, //in yard
  widthdimension: { type: Number, required: true },
  cornerPlot: {type: Boolean, default: false},

  //Transaction Type & Property Avialability
  currentlyLeasedOut: {type: Boolean, default: false},

  //Price Details
  expectedPrice: {type: Number, required: true},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean, default: false},

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
  titleDeed: {type: Boolean, default: false},
  previousOwnerTitleDeedAvailable: {type:Boolean, default: false},
  revenueDocument: {type: Boolean, default: false},
  encumberenceCertificate: {type: Boolean, default: false},
  conversionCertificate: {type: Boolean, default: false},
  
  //Civic Infrastructure Details
  waterConnection: {type: Boolean, default: false},
  electricityConnection: {type: Boolean, default: false},
  sewageConnection: {type: Boolean, default: false},
  roadAvailable: {type: Boolean, default: false},
  },{timestamps: true});

const AgriculturePlot = mongoose.model("AgriculturePlot", agriculturePlotSchema);
module.exports = AgriculturePlot;
