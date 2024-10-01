const mongoose= require("mongoose");
const Property= require("../property.model.js");

const commercialPlotSchema = new mongoose.Schema({
  //Property Location
  city: {
    type: String,
    set: (city) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
  },
  locality: {
    type: String,
    set: (locality) => locality.charAt(0).toUpperCase() + locality.slice(1).toLowerCase()
  },
  projectMarketName: {type: String},
  Address: {type: String, maxlength: 256},
  landZone: {type: String, enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]},
  
  //Property Features
  floorsAllowed: {type: Number},
  openSides: {type: Number},
  facingRoadWidth: {type: Number},
  facingRoadWidthUnit: {type: String, enum:["Meters"], default: "Meters"},
  boundaryWall: {type: Boolean, default: false},

  //Property Area
  plotArea: { type: Number},
  plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  lengthdimension: { type: Number},
  widthdimension: { type: Number},
  dimensionUnit: {type: String, enum:["ft"], default:"ft"},
  cornerPlot: {type: Boolean,default: false},

  //Transaction Type & Property Avialability
  currentlyLeasedOut: {type: Boolean, default: false},
  possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},

  //Price Details
  expectedPrice: {type: Number, required: true},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean, default: false},
  
  //Amenities/Unique Features
  landAmenities: {
    type: String, 
    enum: ["Maintenance Staff","Water Storage","Rain Water Harvesting","Feng Shui / Vaastu Compliant",]
  },

});

const CommercialPlot = Property.discriminator("CommercialPlot", commercialPlotSchema);
module.exports = CommercialPlot;
