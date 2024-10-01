const mongoose= require("mongoose");
const Property=require("../property.model.js");

const commercialShopSchema = new mongoose.Schema({
    //Property Location
    city: {
      type: String,
      set: (city) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
    },
    locality: {
      type: String,
      set: (locality) => locality.charAt(0).toUpperCase() + locality.slice(1).toLowerCase()
    },
    projectMarketName: {type: String},
    Address: {type: String, maxlength: 256},
    landZone: {type: String, enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]},
    nearbyBusinesses: {type: String, enum:[
      "Agriculture Related",
      "Pets Store",
      "Bouquet",
      "Hair Salon",
      "Nursery",
      "Auto Components",
      "Automotive Components",
      "Auto",
      "Vehicle",
      "Vehicle Spare Parts",
      "Vehicle Service",
      "Auto Spare Parts",
      "Bike Spare Parts",
      "Bikes",
      "Motorcycle",
      "Cars",
      "Jeeps",
      "Car Spare Parts",
      "Automotive Maintenance and Repair",
      "Repair Automotive",
      "Animation and Gaming",
      "Game Parlour",
      "Electronic Games",
      "Gaming",
      "Pets and Related",
      "Flowers",
      "Pets Shop",
      "Pet Items",
      "Pets",
      "Veterinary",
      "Pet Hospital",
      "Hospital, Clinics, Biotechnology",
      "Hospital",
      "Clinic",
      "Pathology Lab",
      "Labs",
      "Cement",
      "Glass",
      "Bricks",
      "Tiles",
      "Wallpapers",
      "Ceramics",
      "Electronic Goods",
      "Consumer Durables",
      "Fridge",
      "AC",
      "Microwave",
      "Washing Machine",
      "Camera",
      "Laptops",
      "Computer Hardware",
      "Computers",
      "Geyser",
      "Wood",
      "Furniture",
      "Bed",
      "Sofa",
      "Almirah",
      "Cupboard",
      "Furniture and Related",
      "Bean Bags",
      "Mattresses",
      "Quilts",
      "Kitchen Goods and Related",
      "Kitchen items",
      "Containers",
      "Sieve",
      "Stove",
      "Cooker",
      "Crockery",
      "Dinner Set",
      "Plastic bottles",
      "Plastic Containers and Items",
      "Footwear/Leather",
      "Footwear",
      "Bags",
      "Sandals",
      "Purse",
      "Travel Bags",
      "Restaurant",
      "Snacks",
      "Sweet Shop",
      "Drinks",
      "Wine and Beer",
      "Wine",
      "Alcohol",
      "Beverages",
      "Juice",
      "Fruit Shakes",
      "Ice Cream",
      "Dosa",
      "Hotel",
      "Dhaba",
      "Gems and Jewellery",
      "Jewellers",
      "Gold",
      "Ornaments",
      "Necklace",
      "Artificial Jewellery",
      "Jewellery",
      "GoldSmith",
      "Handicrafts & Carpets",
      "Carpets",
      "Flower Pots",
      "Handicraft Items",
      "Handicraft",
      "Shawl",
      "Artifacts",
      "Clay Artifacts",
      "Showpiece",
      "IT/ITES/Call Center",
      "Call Center",
      "Customer Service",
      "Consulting",
      "Consultant",
      "Website Design",
      "Website",
      "Construction Related Services",
      "Contractor",
      "Architecture Services",
      "Architecture Planning",
      "Industrial Supplies and Related",
      "Industrial Supplies",
      "Raw Material",
      "Beauty, Spa, Saloon and Related",
      "Beauty Parlour",
      "Spa",
      "Massage",
      "Saloon",
      "Jacuzzi",
      "Seeds",
      "Hair Spa",
      "Hair Style",
      "Hair Styling",
      "Bridal Makeup",
      "Make up",
      "Wedding Make Up",
      "Groom Make Up",
      "Petrochemicals & Petroleum products",
      "Gas Pump",
      "Kerosene",
      "Petroleum Goods",
      "CNG Repair",
      "LPG Booking Office",
      "LPG",
      "Chemist",
      "Druggist",
      "Pharmaceuticals",
      "Pharmacy",
      "Power",
      "Solar Devices",
      "Solar Energy",
      "Renewable Energy",
      "Alternate Energy",
      "Fashion Brand",
      "Garments and Related",
      "Textiles",
      "Apparels",
      "Wool",
      "Shawls",
      "Suits",
      "Sarees",
      "Mens wear",
      "Stationary",
      "Books",
      "Gift Shop",
      "Cards",
      "Art and Craft",
      "Printing",
      "Publishing",
      "Hardware Shop",
      "Plumbing",
      "Paints",
      "Hammer and Similar tools",
      "Shipping",
      "Courier",
      "Transport Goods",
      "Logistics",
      "Educational/Coaching Institutes",
      "Coaching Institute",
      "Coaching",
      "Training",
      "Tuition",
      "Skill Development",
      "Real Estate Brokers",
      "Real Estate Agency",
      "Property Dealer",
      "Gym",
      "Club",
      "Fitness Centre",
      "Zumba",
      "Dance Class",
      "Dance Training",
      "Yoga",
      "Pranayama Centre",
      "Electronics - Mobile and related",
      "Mobile phones",
      "Laptops",
      "Computers",
      "Computer Repair",
      "Mobile Repair",
      "Electronic Goods",
      "Electronic spare parts",
      "Electronic Projects",
      "Tours, Travels and Related",
      "Travel Planning",
      "Taxi Services",
      "Tour Planners",
      "Wedding Planners",
      "City Guide",
      "City Planners",
      "Tax Services",
      "Legal Services",
      "Insurance Services",
      "Financial Services",
      "Chartered Accountant",
      "Company Secretary",
      "Ad Agency",
      "Hoardings and Billboards",
      "OOH",
      "Advertising",
      "Media",
      "Digital advertising",
      "Pamphlets",
      "Media Printing",
      "Banner Printing",
      "Flex board Printing",
      "Toys",
      "Baby Care",
      "Baby Products",
      "Baby Creche",
      "Creche",
      "Idols",
      "Religious goods",
      "Religious products",
      "Incense Sticks",
      "Internet Provider",
      "Cable provider",
      "Internet Service",
      "Cable Service",
      "Dish TV",
      "NGOs",
      "Charity Institute",
      "Charitable Trust",
      "ATMs",
      "Cake Shop",
      "Clothes and Garments",
      "School",
      "Grocery",
      "Tutorials",
      "Tuition Centre",
      "Cafe",
      "Bakery",
      "Fun Zone",
      "Play Zone",
      "Shoes",
      "Bank",
      "Banquet Hall",
      "Two Wheeler Showroom",
      "Vehicle Service Center",
      "Multiplex",
      "Medical Store",
      "Saree Shop",
      "Fastfood",
      "Bike Showroom",
      "Dentist",
      "Dental Clinic",
      "Photography",
      "Studio",
      "Milk Booth",
      "Opticals",
      "Opticians",
      "Electrical Goods",
      "Pizza",
      "Car Showroom",
      "Bar",
      "Disc",
      "Wine Shop",
      "Bar and Restaurant",
      "Play School",
      "Scientific Traders",
      "Sanitory Goods"
  ]},
    
    //Property Features
    floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]},
    totalFloor: {type: Number, minlength:1, maxlength: 250},
    furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
    personalWashroom: {type: Boolean, default:"false"},
    pantryCafeteria: {type: String, enum:["Dry","Wet","Not Available"]},
    cornerShop: {type: Boolean, default: false},
    mainRoadFacing: {type: Boolean, default: false},
    
    //Property Area
    plotArea: { type: Number},
    plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    coveredArea: { type: Number},
    coveredAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    carpetArea: { type: Number},
    carpetAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
    entranceWidth: { type: Number},
    entranceWidthUnit: {type:String, enum:["ft","meters"]},
       
    //Transaction Type & Property Avialability
    possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
    currentlyLeasedOut: {type: Boolean, default: false},

    //Amenities/Unique Features
    commercialAmenities: {
        type: [String],
        enum: [
          "Reserved Parking",
          "Visitor Parking",
          "Lift",
          "Power Backup",
          "Internet/Wi-Fi",
          "Security Personnel",
          "CCTV Camera",
          "Air Conditioned",
          "Conference Room",
          "Cafeteria",
          "Business Lounge",
          "24/7 Security",
          "Fire Safety",
          "High-Speed Internet",
          "Reception/Waiting Area",
          "ATM",
          "Escalators",
          "Retail Outlets",
          "Co-working Spaces",
          "Electric Vehicle Charging Stations"
      ]},
    
});

const CommercialShop = Property.discriminator("CommercialShop", commercialShopSchema);
module.exports = CommercialShop;
