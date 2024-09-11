const mongoose= require("mongoose");
const shopShowroomSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    carpetArea: { type: String, required: true },
    superArea: {type: String, required: true},
    rentalValue: {type: Number},
    loading: {type: Number},
    securityDeposit: {type: Number},
    monthlyMaintainanceValue: {type: Number},
    floors: {type: Number},
    totalFloor: {type: Number},
    preLeasedProperty: {type: String, enum: ["No", "Company"]},
    lockInPeriod: {type: Number},
    idealFor:{
        type: [String], 
        enum: [
        'Clothes', 'Fast Food', 'Dental Clinic', 'Footwear', 'Sweet', 'Restaurants', 
        'ATM', 'Boutique', 'Clinic', 'Mobile', 'Grocery', 'Cloud Kitchen', 'Medical', 
        'Bakery', 'Coffee', 'Juice', 'Stationery', 'Jewellery', 'Gym', 'Pub/Bar', 
        'Tea Stall', 'Salon/Spa'
      ]},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    transactionType: { type: String, enum: ["New Property","Resale","Rent"]},
    furnished: {type: string, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    possesionStatus: {type: String, enum: ["Ready To Move", "Under Construction","Immediately"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    propertyAge: {type: String, enum: ["New Construction","Under Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 20 years","20 to 30 years","30+ years"]},
    amenities: {type: [String], enum: ["Reserved Parking","Visitor Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel","CCTV Camera"], required: true},
});

const ShopShowroom = mongoose.model("ShopShowroom", shopShowroomSchema);
module.exports = ShopShowroom;
