const mongoose= require("mongoose");
const officeSpaceSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    carpetArea: { type: String, required: true },
    superArea: {type: String, required: true},
    RERAID: {type: String},
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

const OfficeSpace = mongoose.model("OfficeSpace", officeSpaceSchema);
module.exports = OfficeSpace;
