const mongoose= require("mongoose");
const residentialFlatSchema = new mongoose.Schema({
    //Property Details
    numberOfFlatsInSociety: {type: String, enum:["<50","50-100",">100"]},
    
    //Property Location
    city: {type: String, required: true},
    locality: {type: String, required: true},
    projectSocietyName: {type: String},
    Address: {type: String, maxlength: 256},

    //Property Features
    floorsAllowed: {type: Number, minlength:1, maxlength: 250},
    bedrooms:{ type: Number, minlength:1, maxlength: 20},
    balconies:{ type: Number, minlength:1, maxlength: 20},
    bathrooms: {type: Number, maxlength: 20},
  
    floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]},
    totalFloor: {type: Number, minlength:1, maxlength: 250},
    furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},

    //Property Area
    carpetArea: { type: Number},
    superArea: { type: Number},
    carpetAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    superAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    
    //Price Details
    expectedPrice: {type: Number, required: true},
    bookingAmount: {type: Number},
    priceNegotiable: {type: Boolean, default: false},
    
    residentialAmenities: {
    type: [String],
    enum: [
      "Reserved Parking",
      "Visitor Parking",
      "Lift",
      "Power Backup",
      "Gas Pipeline",
      "Park",
      "Kids Play Area",
      "Gymnasium",
      "Swimming Pool",
      "Club House",
      "Air Conditioned",
      "Vaastu Compliance",
      "Internet/Wi-Fi",
      "Security Personnel",
      "CCTV Camera",
      "Jogging Track",
      "Party Lawn",
      "Indoor Games Room",
      "Fire Safety",
      "Intercom Facility",
      "Solar Power Panels",
      "Gated Community",
      "Water Purifier",
      "Laundry Service",
      "Pet-Friendly Area",
      "Meditation Zone"
    ]
  },
    
});

const ResidentialFlat = mongoose.model("ResidentialFlat", residentialFlatSchema);
module.exports = ResidentialFlat;