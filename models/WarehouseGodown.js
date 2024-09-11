const mongoose= require("mongoose");
const warehouseSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    superArea: {type: String, required: true},
    rentalValue: {type: Number},
    securityDeposit: {type: Number},
    floors: {type: Number},
    totalFloor: {type: Number},
    idealFor:{
        type: [String], 
        enum: [
        'Clothes', 'Fast Food', 'Dental Clinic', 'Footwear', 'Sweet', 'Restaurants', 
        'ATM', 'Boutique', 'Clinic', 'Mobile', 'Grocery', 'Cloud Kitchen', 'Medical', 
        'Bakery', 'Coffee', 'Juice', 'Stationery', 'Jewellery', 'Gym', 'Pub/Bar', 
        'Tea Stall', 'Salon/Spa'
      ]},
    furnished: {type: string, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"], required: true},
    transactionType: { type: String, enum: ["New Property","Resale","Rent"]},
    overlooking: {type: String, enum:["Pool","Garden/Park","Main Road"]},
    possesionStatus: {type: String, enum: ["Ready To Move", "Under Construction","Immediately"]},
    facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
    propertyAge: {type: String, enum: ["New Construction","Under Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 20 years","20 to 30 years","30+ years"]},
    amenities: {type: [String], enum: ["Reserved Parking","Visitor Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel","CCTV Camera"], required: true},
});

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;
