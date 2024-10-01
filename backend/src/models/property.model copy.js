const mongoose = require("mongoose");
const propertyNewSchema = new mongoose.Schema({

  //Property Details
  description: { type: String},
  productID: {type: Number, required: true},
  propertyPurpose: {type: String, enum:["Sale","Exchange","Partnership"], required: true, set: (propertyPurpose) => propertyPurpose.charAt(0).toUpperCase() + propertyPurpose.slice(1).toLowerCase()},
  propertyType: {
    type: String,
    enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Plot/Land","Warehouse/ Godown","Industrial Plot/Land","Industrial Building","Industrial Shed", "Agricultural Plot/Land","Farm House"],
    required: true,
  },
  images: {
    type: [String], // Array of URLs from Cloudinary
  },
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  propertyStatus: {type: String, enum:["Approval Pending","Approved"], default: "Approval Pending", set: (propertyStatus) => propertyStatus.charAt(0).toUpperCase() + propertyStatus.slice(1).toLowerCase()},
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
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"]},
  transactionType: { type: String, enum: ["New Property","Resale"]},

  //Property Price

  expectedPrice: {type: Number},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean,default: false},

  //Amenities/Unique Features
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

const PropertyNew = mongoose.model("PropertyNew", propertyNewSchema);
module.exports = PropertyNew;