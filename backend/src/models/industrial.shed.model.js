const mongoose= require("mongoose");
const industrialShedSchema = new mongoose.Schema({
    //Property Location
    city: {type: String, required: true},
    locality: {type: String, required: true},
    Address: {type: String, maxlength: 256},
    landZone: {type: String, enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]},
    
    //Property Features
    floorsAllowed: {type: Number},
    openSides: {type: Number},
    facingRoadWidth: {type: Number},

    //Property Area
    superArea: { type: Number, required: true },
    areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
           
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    availableFromMonth: {type: String, enum:[]},
    availableFromYear: {type: Number, enum:[]},
    constructionAge: {type: String, enum: ["New Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 15 years","15 to 20 years","20 to 30 years","Above 30 years"]},
    currentlyLeasedOut: {type: Boolean, default: false},
        
    //Price Details
    expectedPrice: {type: Number, required: true},
    bookingAmount: {type: Number},
    priceNegotiable: {type: Boolean, default: false},
    
    //Others
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    transactionType: { type: String, enum: ["New Property","Resale"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: {type: [String], enum: ["Reserved Parking","Visitor Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel","CCTV Camera"], required: true},
});

const IndustrialShed = mongoose.model("IndustrialShed", industrialShedSchema);
module.exports = IndustrialShed;
