const mongoose= require("mongoose");
const plotSchema = new mongoose.Schema({
  //Property Location
  city: {type: String, required: true},
  locality: {type: String, required: true},
  projectSocietyName: {type: String},
  Address: {type: String, maxlength: 256},

  //Property Features
  floorsAllowed: {type: Number},
  openSides: {type: Number},
  facingRoadWidth: {type: Number},
  boundaryWall: {type: Boolean, default: false},
  gatedColony: {type: Boolean, default: false},
  approvedBy: {type: String, enum: ["Local Authority"]},

  //Property Area
  plotArea: { type: Number, required: true },
  areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
  lengthdimension: { type: Number, required: true },
  widthdimension: { type: Number, required: true },
  cornerPlot: {type: Boolean,default: false},

  //Price Details
  expectedPrice: {type: Number, required: true},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean,default: false},
  taxAndGovtChargesExcluded: {type: Boolean,default: false},
  allInclusivePrice: {type: Boolean,default: false},

  //Additional Pricing Details
  maintenanceCharge: {type: Number},
  maintenanceChargeUnit: {type: String, enum:["Monthly","Annually","One Time","Per Unit/Monthly"]},
  expectedRental: {type: Number},
  bookingAmountRental: {type: Number},
  annualDuesPayable: {type: Number},
  uniquePropertyDescription: {type: String, maxlength: 256},

  //Amenities/Unique Features
  amenities: {
    type: String, 
    enum: [
      "Maintenance Staff",
      "Water Storage",
      "Rain Water Harvesting",
      "Feng Shui / Vaastu Compliant",
    ]
  },
  overlooking: {type: String, enum:["Pool","Garden/Park","Main Road","Club","Others","Hills","Lake","River","Open Land","Forest","City Skyline","Residential Area","Commercial Area","Farmland","Mountains"]},
  facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
  status: {type: String, enum: ["Ready To Move", "Under Construction"], required: true},
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
  transactionType: { type: String, enum: ["New Property","Resale"], required: true},
  locationAdvantages: {
    type: String,
    enum: [
      "Close to Metro Station",
      "Close to School",
      "Close to Hospital",
      "Close to Market",
      "Close to Railway Station",
      "Close to Airport",
      "Close to Mall",
      "Close to Highway",
      "Close to Bus Stop",
      "Close to IT Park",
      "Close to Industrial Area",
      "Close to University",
      "Close to Park",
      "Close to Government Office",
      "Close to Sports Complex",
      "Close to Commercial Hub",
      "Close to Entertainment Zone"
    ]
  },

  //legal Document Status
  titleDeed: {type: Boolean,default: false},
  previousOwnerTitleDeedAvailable: {type:Boolean, default: false},
  revenueDocument: {type: Boolean,default: false},
  encumberenceCertificate: {type: Boolean,default: false},
  conversionCertificate: {type: Boolean,default: false},
  
  //Civic Infrastructure Details
  waterConnection: {type: Boolean,default: false},
  electricityConnection: {type: Boolean,default: false},
  sewageConnection: {type: Boolean,default: false},
  roadAvailable: {type: Boolean,default: false},
  });

const Plot = mongoose.model("Plot", plotSchema);
module.exports = Plot;
