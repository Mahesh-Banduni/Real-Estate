const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({

  //Property Details
  description: { type: String, set: (description) => description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()},
  propertyID: {type: Number, required: true},
  propertyPurpose: {type: String, enum:["Sale","Exchange","Partnership"], required: true, set: (propertyPurpose) => propertyPurpose.charAt(0).toUpperCase() + propertyPurpose.slice(1).toLowerCase()},
  propertyType: {
    type: String,
    enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Plot/Land","Warehouse/ Godown","Industrial Plot/Land","Industrial Building","Industrial Shed", "Agricultural Plot/Land","Farm House"],
    required: true,
    set: (propertyType) => propertyType.charAt(0).toUpperCase() + propertyType.slice(1).toLowerCase()
  },
  images: {
    type: [String], // Array of URLs from Cloudinary
  },
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  propertyStatus: {type: String, enum:["Approval Pending","Approved"], default: "Approval Pending"}, set: (propertyStatus) => propertyStatus.charAt(0).toUpperCase() + propertyStatus.slice(1).toLowerCase(),
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isHandpickedProperty: { 
    type: Boolean, 
    default: false 
  },
  isRecommendedProperty: { 
    type: Boolean,
    default: false 
  },
  
  //Transaction Type & Property Availability & Ownership
  ownership: { type: String,
    // enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], 
    set: (ownership) => ownership.charAt(0).toUpperCase() + ownership.slice(1).toLowerCase()},
  transactionType: { type: String, enum: ["New Property","Resale"], set: (transactionType) => transactionType.charAt(0).toUpperCase() + transactionType.slice(1).toLowerCase()},

  //Property Price

  expectedPrice: {type: Number},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean,default: false},

  //Amenities/Unique Features
  locationAdvantages: {
    type: [Object],
    // enum: [
    //   "Close to Metro Station",
    //   "Close to School",
    //   "Close to Hospital",
    //   "Close to Market",
    //   "Close to Railway Station",
    //   "Close to Airport",
    //   "Close to Mall",
    //   "Close to Highway",
    //   "Close to Bus Stop",
    //   "Close to IT Park",
    //   "Close to Industrial Area",
    //   "Close to University",
    //   "Close to Park",
    //   "Close to Government Office",
    //   "Close to Sports Complex",
    //   "Close to Commercial Hub",
    //   "Close to Entertainment Zone"
    // ],
    set: (locationAdvantages) => locationAdvantages.charAt(0).toUpperCase() + locationAdvantages.slice(1).toLowerCase()
  },
  overlooking: {
    type: [Object], //enum:["Pool","Garden/Park","Main Road","Club","Others","Hills","Lake","River","Open Land","Forest","City Skyline","Residential Area","Commercial Area","Farmland","Mountains"],
    set: (overlooking) => overlooking.charAt(0).toUpperCase() + overlooking.slice(1).toLowerCase()
  },
  facing: {type: String, //enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"],
    set: (facing) => facing.charAt(0).toUpperCase() + facing.slice(1).toLowerCase()
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;