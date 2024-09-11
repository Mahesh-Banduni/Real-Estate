const mongoose= require("mongoose");
const flatSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    carpetArea: { type: String, required: true },
    RERAID: {type: String},
    flatType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
    subPropertyType: {type: String, enum:["Multistorey Apartment","Builder Floor Apartment","Penthouse","Studio Apartment"]},
    developer: { type: String},
    project: { type: String},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    floors: {type: number},
    transactionType: { type: String, enum: ["New Property","Resale"]},
    furnished: {type: string, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    status: {type: String, enum: ["Ready To Move", "Under Construction"]},
    constructionAge: {type: String, enum: ["Under Construction","Residential"]},
    additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
    amenities: {type: [String], enum: ["Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel"], required: true},
});

const Flat = mongoose.model("Flat", flatSchema);
module.exports = Flat;