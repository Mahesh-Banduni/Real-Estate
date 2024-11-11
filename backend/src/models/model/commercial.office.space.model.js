const mongoose= require("mongoose");
const Property= require("../property.model.js");

const commercialOfficeSpaceSchema = new mongoose.Schema({
    
    //Property Location
    city: {type: String, required: true},
    locality: {type: String, required: true},
    buildingComplexName: {type: String},
    Address: {type: String, maxlength: 256},
    landZone: {type: String, //enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]
    },  
    idealForBusinesses: {type: [String], 
      // enum:[
      //   "Private Company",
      //   "Individual Business",
      //   "Self Employed Business",
      //   "Boutique",
      //   "Departmental Clinic",
      //   "Cake Shop",
      //   "Mobile Service Center",
      //   "R&D center",
      //   "Research Center",
      //   "High Security Setup",
      //   "Sales/Marketing Office",
      //   "Back office",
      //   "Front Office",
      //   "24X7",
      //   "Tuition",
      //   "Education",
      //   "Lounge",
      //   "Cafe",
      //   "IT Training Center",
      //   "Non IT training center",
      //   "Logistics Back Office",
      //   "Banks",
      //   "Shipment",
      //   "Packaging Back office",
      //   "Advertising",
      //   "Travel Agency",
      //   "Backend Office",
      //   "Advocate",
      //   "Frontend Office",
      //   "Advocate Office",
      //   "Architect Office",
      //   "Small Office Purpose",
      //   "ATM",
      //   "Bank branch",
      //   "Banking",
      //   "Finance",
      //   "Banks and NBFC",
      //   "Insurance and Mutual Fund Companies",
      //   "Share Brokers",
      //   "Banquet Hall",
      //   "Bar and Restaurant",
      //   "Boutique Office",
      //   "Events and Promotions",
      //   "Builders and Architects",
      //   "Builders and Developers",
      //   "CA Office",
      //   "Traders Office",
      //   "Self Employed Professionals",
      //   "Start Ups",
      //   "Lawyers",
      //   "Tax Consultants",
      //   "Law Chamber",
      //   "Company Head Office",
      //   "Company Regional Office",
      //   "Company Marketing Office",
      //   "Educational Registration Office",
      //   "Area Sales Office",
      //   "Chartered Accountant",
      //   "Law Company",
      //   "Online Marketing Office",
      //   "Digital Marketing Office",
      //   "Recruitments Company",
      //   "Business Operations Office",
      //   "Job Consulting",
      //   "Computer Training",
      //   "Construction Office",
      //   "E-Commerce",
      //   "Gym/Fitness Centre",
      //   "Hospital",
      //   "Hotel",
      //   "Showroom",
      //   "Guest House",
      //   "Insurance Company",
      //   "Multi Specialty Hospital",
      //   "Training Institute",
      //   "Call Center/BPO",
      //   "Coaching Center",
      //   "Private Consulting",
      //   "Doctor Clinic",
      //   "Pathology",
      //   "IT/ITES and Related",
      //   "Studio/Production house",
      //   "Private Office",
      //   "Health Care",
      //   "Corporate Office Setup",
      //   "Women Safety"
      // ]
    },


    //Property Features
    bathrooms: {type: Number, maxlength: 20},
    floorNumber: {type: String,// enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]
    },
    totalFloor: {type: Number, minlength:1, maxlength: 250},
    furnished: {type: String,// enum: ["Semi-Furnished","Furnished", "Unfurnished"]
    },
    personalWashroom: {type: String, default: "No"},
    pantryCafeteria: {type: String, //enum:["Dry","Wet","Not Available"]
    },
    
    //Property Area
    carpetArea: { type: Number},
    superArea: { type: Number},
    carpetAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    superAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
        
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, //enum: ["Ready To Move", "Under Construction"]
    },
    currentlyLeasedOut: {type: String, default: "No"},
        
    //Amenities/Unique Features
    commercialAmenities: {
    type: [String],
    // enum: [
    //   "Reserved Parking",
    //   "Visitor Parking",
    //   "Lift",
    //   "Power Backup",
    //   "Internet/Wi-Fi",
    //   "Security Personnel",
    //   "CCTV Camera",
    //   "Air Conditioned",
    //   "Conference Room",
    //   "Cafeteria",
    //   "Business Lounge",
    //   "24/7 Security",
    //   "Fire Safety",
    //   "High-Speed Internet",
    //   "Reception/Waiting Area",
    //   "ATM",
    //   "Escalators",
    //   "Retail Outlets",
    //   "Co-working Spaces",
    //   "Electric Vehicle Charging Stations"
    // ]
  },
    
});

const CommercialOfficeSpace = Property.discriminator("CommercialOfficeSpace", commercialOfficeSpaceSchema);
module.exports = CommercialOfficeSpace;
