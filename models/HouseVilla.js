const mongoose= require("mongoose");
const villaSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    carpetArea: { type: String, required: true },
    RERAID: {type: String},
    villaType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
    subPropertyType: {type: String, enum:["Residential House","Villa"]},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    floors: {type: number},
    unitsPerFloor: {type: Number},
    flooring: {type: String, enum: ["Ceramic Tiles","Wooden","Vitrified","Marble","Granite"]},
    transactionType: { type: String, enum: ["New Property","Resale"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    furnished: {type: string, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    status: {type: String, enum: ["Ready To Move", "Under Construction"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    constructionAge: {type: String, enum: ["New Construction","Under Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 20 years","20 to 30 years","30+ years"]},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: [{type: String, enum: ["Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel"], required: true}],
});

const Villa = mongoose.model("Villa", villaSchema);
module.exports = Villa;
