const mongoose= require("mongoose");
const penthouseSchema = new mongoose.Schema({
    
    //Property Location
    city: {type: String, required: true},
    locality: {type: String, required: true},
    projectSocietyName: {type: String},
    Address: {type: String, maxlength: 256},

    //Property Features
    bedrooms:{ type: Number, maxlength: 18},
    balconies:{ type: Number, maxlength: 18},
    floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4"]},
    totalFloor: {type: Number, maxlength: 150},
    furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    bathrooms: {type: Number, maxlength: 20},

    //Property Area
     superArea: { type: Number, required: true },
     carpetArea: { type: Number, required: true },
     areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
   
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    availableFromMonth: {type: String, enum:[]},
    availableFromYear: {type: Number, enum:[]},
    constructionAge: {type: String, enum: ["New Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 15 years","15 to 20 years","20 to 30 years","Above 30 years"]},
    
    //Price Details
    expectedPrice: {type: Number, required: true},
    bookingAmount: {type: Number},
    priceNegotiable: {type: Boolean},

    //Others
    transactionType: { type: String, enum: ["New Property","Resale"]},
    flatType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
    subPropertyType: {type: String, enum:["Builder Floor Apartment","Penthouse","Studio Apartment"]},
    developer: { type: String},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: {type: [String], enum: ["Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel"], required: true},

    //Renting Fields

});

const Penthouse = mongoose.model("Penthouse", penthouseSchema);
module.exports = Penthouse;