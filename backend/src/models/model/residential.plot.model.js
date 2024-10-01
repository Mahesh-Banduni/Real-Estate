const mongoose= require("mongoose");
const PropertyNew = require("../property.model copy.js");
const residentialPlotSchema = new mongoose.Schema({

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
  address: {type: String, maxlength: 256},
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
  openSides: {type: Number, minlength:1, maxlength:4},
  facingRoadWidth: {type: Number},
  facingRoadWidthUnit: {type: String, enum:["Meters"], default: "Meters"},
  boundaryWall: {type: Boolean, default: false},
  gatedColony: {type: Boolean, default: false},
  anyConstructionDone: {type: Boolean, default: false},

  //Property Area
  plotArea: { type: Number},
  plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  lengthdimension: { type: Number},
  widthdimension: { type: Number},
  dimensionUnit: {type: String, enum:["ft"], default:"ft"},
  cornerPlot: {type: Boolean,default: false},

  //Amenities/Unique Features
  landAmenities: {
    type: String, 
    enum: ["Maintenance Staff","Water Storage","Rain Water Harvesting","Feng Shui / Vaastu Compliant",]
  },
  });

const ResidentialPlot = PropertyNew.discriminator("ResidentialPlot", residentialPlotSchema);
module.exports = ResidentialPlot;
