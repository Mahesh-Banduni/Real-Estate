const mongoose= require("mongoose");
const residentialPlotSchema = new mongoose.Schema({

  //Property Location
  city: {type: String, required: true},
  locality: {type: String, required: true},
  projectSocietyName: {type: String},
  address: {type: String, maxlength: 256},

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

const ResidentialPlot = mongoose.model("ResidentialPlot", residentialPlotSchema);
module.exports = ResidentialPlot;
