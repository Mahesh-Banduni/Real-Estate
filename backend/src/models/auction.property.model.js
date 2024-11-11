const mongoose = require('mongoose');

const auctionPropertySchema = new mongoose.Schema({
  bankName: {
    type: String,
    trim: true,
  },
  propertyID:{
    type: String
  },
  borrowerName:{
    type: String
  },
  propertyType: {
    type: String,
    enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Plot/Land","Warehouse/ Godown","Industrial Plot/Land","Industrial Building","Industrial Shed", "Agricultural Plot/Land","Farm House"],
  },
  propertyArea: {
    type: Number,
  },
  propertyAreaUnit: {
    type: String,
    enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],
  },
  city: {
    type: String,
  },
  locality: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  reservePrice: {
    type: Number
  },
  emdAmount: {
    type: Number
  },
  emdSubmissionDeadline: {
    type: Date, default: Date.now
  },
  auctionStartDateTime: {
    type: Date, default: Date.now
  },
  auctionEndDateTime: {
    type: Date, default: Date.now
  },
});

const AuctionProperty = mongoose.model('AuctionProperty', auctionPropertySchema);
module.exports = AuctionProperty;