const mongoose= require("mongoose");
const OfficeITParkSEZ = new mongoose.Schema({
    //Property Location
    city: {type: String, required: true},
    locality: {type: String, required: true},
    projectMarketName: {type: String},
    Address: {type: String, maxlength: 256},
    landZone: {type: String, enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]},
    
    //Property Features
    floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4"]},
    totalFloor: {type: Number, maxlength: 150},
    furnished: {type: String, enum: ["Furnished", "Unfurnished"]},
    washrooms: {type: Number, maxlength: 20},
    personalWashroom: {type: Boolean},
    pantryCafeteria: {type: String, enum:["Dry","Wet","Not Available"]},
    
    //Property Area
    superArea: { type: Number, required: true },
    carpetArea: { type: Number, required: true },
    areaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
       
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    availableFromMonth: {type: String, enum:[]},
    availableFromYear: {type: Number, enum:[]},
    constructionAge: {type: String, enum: ["New Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 15 years","15 to 20 years","20 to 30 years","Above 30 years"]},
    currentlyLeasedOut: {type: Boolean},
    assuredReturns: {type: Boolean},
    rateOfReturn: {type: Number},
        
    //Price Details
    expectedPrice: {type: Number, required: true},
    bookingAmount: {type: Number},
    priceNegotiable: {type: Boolean},
    
    //Others
    subPropertyType: {type: String, enum:["Ready to Move Office Space","Bare Shell Office Space","Office in IT Park/ SEZ"]},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    floors: {type: Number},
    unitsPerFloor: {type: Number},
    furnished: {type: string, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    transactionType: { type: String, enum: ["New Property","Resale"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    status: {type: String, enum: ["Ready To Move", "Under Construction"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    propertyAge: {type: String, enum: ["New Construction","Under Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 20 years","20 to 30 years","30+ years"]},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: {type: [String], enum: ["Reserved Parking","Visitor Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel","CCTV Camera"], required: true},
});

const CommercialOfficeSpace = mongoose.model("CommercialOfficeSpace", commercialOfficeSpaceSchema);
module.exports = CommercialOfficeSpace;
