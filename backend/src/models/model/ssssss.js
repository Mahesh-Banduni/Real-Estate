const mongoose = require("mongoose");
const CommercialOfficeSpaceSchema = new mongoose.Schema({

  //Property Details
  title: { type: String, required: true},
  description: { type: String},
  propertyType: {
    type: String,
    enum: ["Residential Plot/Land", "Residential Flat/Appartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Land","Warehouse/ Godown","Industrial Land","Industrial Building","Industrial Shed", "Agricultural Land","Farm House"],
    required: true,
  },
  images: [{ type: String }],
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },       
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  //Property Location & Uniqueness
  city: {type: String, enum:["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"], default:"Dehradun", required: true},
  locality: {type: String, required: true},
  nameOfProjectSociety: {type: String},
  Address: {type: String, maxlength: 256},

  //Property Features
  bedrooms:{ type: Number, minlength:1, maxlength: 20},
  balconies:{ type: Number, minlength:1, maxlength: 20},
  bathrooms: {type: Number, maxlength: 20},
  totalFloor: {type: Number, minlength:1, maxlength: 250},
  furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
  
  personalWashroom: {type: Boolean, default:"false"},
  pantryCafeteria: {type: String, enum:["Dry","Wet","Not Available"]},

  cornerShop: {type: Boolean, default: false},
  mainRoadFacing: {type: Boolean, default: false},

  anyConstructionDone: {type: Boolean, default: false},

  BHKType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
  flooring: {type: String, enum: ["Ceramic Tiles","Wooden","Vitrified","Marble","Granite"]},

  floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]},
  totalFloor: {type: Number, minlength:1, maxlength: 250},
  furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
  bathrooms: {type: Number, maxlength: 20},

  personalWashroom: {type: Boolean, default:"false"},
  pantryCafeteria: {type: String, enum:["Dry","Wet","Not Available"]},

  //Property Area

  carpetArea: { type: Number, required: true },
  superArea: { type: Number, required: true },
  carpetAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
  superAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
  
  //Transaction Type & Property Availability & Ownership
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
  transactionType: { type: String, enum: ["New Property","Resale"], required: true},
  possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
  currentlyLeasedOut: {type: Boolean, default: false},

  //Property Price

  expectedPrice: {type: Number, required: true},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean,default: false},
  taxAndGovtChargesExcluded: {type: Boolean,default: false},
  allInclusivePrice: {type: Boolean,default: false},

  //Amenities/Unique Features
  commercialAmenities: {
    type: [String],
    enum: [
      "Reserved Parking",
      "Visitor Parking",
      "Lift",
      "Power Backup",
      "Internet/Wi-Fi",
      "Security Personnel",
      "CCTV Camera",
      "Air Conditioned",
      "Conference Room",
      "Cafeteria",
      "Business Lounge",
      "24/7 Security",
      "Fire Safety",
      "High-Speed Internet",
      "Reception/Waiting Area",
      "ATM",
      "Escalators",
      "Retail Outlets",
      "Co-working Spaces",
      "Electric Vehicle Charging Stations"
    ]
  },
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
  overlooking: {type: String, enum:["Pool","Garden/Park","Main Road","Club","Others","Hills","Lake","River","Open Land","Forest","City Skyline","Residential Area","Commercial Area","Farmland","Mountains"]},
  facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
});

const CommercialOfficeSpace = mongoose.model("CommercialOfficeSpace", CommercialOfficeSpaceSchema);
module.exports = CommercialOfficeSpace;