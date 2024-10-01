const mongoose= require("mongoose");
const PropertyNew= require("../property.model copy.js");
const residentialHouseSchema = new mongoose.Schema({

    //Property Location
    city: {
      type: String,
      set: (city) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
    },
    locality: {
      type: String,
      set: (locality) => locality.charAt(0).toUpperCase() + locality.slice(1).toLowerCase()
    },
    projectSocietyName: {type: String},
    Address: {type: String, maxlength: 256},
    fromCity: {type: String, set: (fromCity) => fromCity.charAt(0).toUpperCase() + fromCity.slice(1).toLowerCase()},
    toCity: {type: String, set: (toCity) => toCity.charAt(0).toUpperCase() + toCity.slice(1).toLowerCase()},
    fromCityLocality: {
      type: String,
      set: (fromCityLocality) => fromCityLocality.charAt(0).toUpperCase() + fromCityLocality.slice(1).toLowerCase() // Capitalize before storing
    },
    toCityLocality: {
      type: String,
      set: (toCityLocality) => toCityLocality.charAt(0).toUpperCase() + toCityLocality.slice(1).toLowerCase() // Capitalize before storing
    },

    //Property Features
    floorsAllowed: {type: Number, minlength:1, maxlength: 250},
    openSides: {type: Number, minlength:1, maxlength:4},
    facingRoadWidth: {type: Number},
    facingRoadWidthUnit: {type: String, enum:["Meters"], default: "Meters"},
    bedrooms:{ type: Number, minlength:1, maxlength: 20},
    balconies:{ type: Number, minlength:1, maxlength: 20},
    bathrooms: {type: Number, maxlength: 20},
    floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]},
    totalFloor: {type: Number, minlength:1, maxlength: 250},
    furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},

    //Property Area
    plotArea: { type: Number},
    plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    lengthdimension: { type: Number},
    widthdimension: { type: Number},
    dimensionUnit: {type: String, enum:["ft"], default:"ft"},
    cornerPlot: {type: Boolean,default: false},
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

const ResidentialHouse = PropertyNew.discriminator("ResidentialHouse", residentialHouseSchema);
module.exports = ResidentialHouse;

