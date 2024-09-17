const mongoose= require("mongoose");
const villaSchema = new mongoose.Schema({
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
    openSides: {type: Number},
    facingRoadWidth: {type: Number},

    //Property Area
    plotArea: { type: Number, required: true },
    plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
    lengthdimension: { type: Number, required: true },
    widthdimension: { type: Number, required: true },
    carpetArea: { type: Number, required: true },
    superArea: { type: Number, required: true },
    csAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"],required: true},
    cornerPlot: {type: Boolean,default: false},

    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    availableFromMonth: {type: String, enum:[]},
    availableFromYear: {type: Number, enum:[]},
    constructionAge: {type: String, enum: ["New Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 15 years","15 to 20 years","20 to 30 years","Above 30 years"]},
    
    //Price Details
    expectedPrice: {type: Number, required: true},
    bookingAmount: {type: Number},
    priceNegotiable: {type: Boolean,default: false},
    
    
    //Others
    villaType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    flooring: {type: String, enum: ["Ceramic Tiles","Wooden","Vitrified","Marble","Granite"]},
    transactionType: { type: String, enum: ["New Property","Resale"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: [{type: String, enum: ["Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel"], required: true}],
});

const Villa = mongoose.model("Villa", villaSchema);
module.exports = Villa;
