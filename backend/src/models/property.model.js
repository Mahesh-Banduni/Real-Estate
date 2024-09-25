const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({

  //Property Details
  title: { type: String},
  description: { type: String},
  propertyPurpose: {type: String, enum:["Sell","Exchange Property","Partnership Property"], required: true},
  propertyType: {
    type: String,
    enum: ["Residential Plot/Land", "Residential Flat/Appartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Land","Warehouse/ Godown","Industrial Land","Industrial Building","Industrial Shed", "Agricultural Land","Farm House"],
    required: true,
  },
  images: [{ type: String }],
  dateListed: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },       
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  //Property Location & Uniqueness
  numberOfFlatsInSociety: {type: String, enum:["<50","50-100",">100"], default:"<50"},
  city: {type: String, enum:["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"], default:"Dehradun"},
  locality: {
    type: String,
    enum: [
        "Ajabpur Kalan",
        "Ajabpur Khurd",
        "Anand Vihar",
        "Balawala",
        "Bhandari Bagh",
        "Bhatta Kuffer",
        "Chukkuwala",
        "Clement Town",
        "Dalanwala",
        "Darshan Lal Chowk",
        "Dehradun Cantonment",
        "Dhamawala",
        "Doiwala",
        "Doon Vihar",
        "Dowling Road",
        "Dudhli",
        "Ghansali",
        "Gharonda",
        "Ghatta Banger",
        "Ghatta Khera",
        "Harrawala",
        "Hathi Pao",
        "Indira Nagar",
        "Jaitunwala",
        "Jakhan",
        "Jolly Grant",
        "Kandoli",
        "Kanwali Road",
        "Khadak Khera",
        "Khurbura",
        "Kirtipur",
        "Kulhan",
        "Malsi",
        "Manakpur",
        "Mangal Nagar",
        "Manda",
        "Mothrowala",
        "Mussoorie",
        "Nehrugram",
        "Niranjanpur",
        "Omaxe City",
        "Pahar Ganj",
        "Patel Nagar",
        "Pindar",
        "Prakash Nagar",
        "Rajpur",
        "Raipur",
        "Rajpur Road",
        "Rishikesh",
        "Sahastradhara",
        "Sahastradhara Road",
        "Salan Gaon",
        "Selaqui",
        "Sidhpur",
        "Sitaram",
        "Sunderwala",
        "Surkanda",
        "Tapovan",
        "Thano",
        "Tihari",
        "Timli",
        "Uttarakhand",
        "Vasant Vihar",
        "Vikasnagar",
        "Khandari",
        "Palsan",
        "Kharakhet",
        "Rishikesh",
        "Prem Nagar",
        "Balbir Road",
        "E.C. Road",
        "Kedar Camp",
        "Haridwar Road",
        "Bansal Enclave",
        "Indraprastha Colony",
        "FRI",
        "FRI Road",
        "Government Colony",
        "HEC",
        "HN Bahuguna Road",
        "I.I.T",
        "Kamal Ghat",
        "Laxman Chowk",
        "Malsi Deer Park",
        "Mukhani",
        "New Cantt",
        "Panditwadi",
        "Patel Chowk",
        "R.K. Puram",
        "Railway Road",
        "Rishi Nagar",
        "Road No. 7",
        "Sahastradhara",
        "Sahastradhara Road",
        "Sarai",
        "Sewa Nagar",
        "Silasro",
        "Sukhro",
        "Takda",
        "Tehri Road",
        "Vikas Nagar",
        "Bhaniawala",
        "Chitragupta Nagar",
        "Bhaniawala",
        "Dehu Khurd",
        "Ganeshpur",
        "Garhi Cantt",
        "Hathibarkala",
        "Hiwal",
        "Khandarwala",
        "Ladpur",
        "Laldhang",
        "Lather",
        "Manjwala",
        "Nahar Road",
        "Nargada",
        "Naya Gaon",
        "Nighasari",
        "Okhla",
        "Padampur",
        "Patniya",
        "Rajan Bhadri",
        "Rajpur Road",
        "Ramnagar",
        "Ramghat",
        "Rampur",
        "Raipur",
        "Rani Pokhari",
        "Sanik Colony",
        "Saraj",
        "Selaqui",
        "Sira Bazar",
        "Sondhi",
        "Srinagar",
        "Sudhakar Ghar",
        "Talla Bhal",
        "Talra",
        "Thandi Sadak",
        "Tikri",
        "Titiya",
        "Tuni",
        "Udaipur",
        "Vidya Niketan",
        "Wadi Bagh",
        "Ahluwalia",
        "Amritpur",
        "Babudhan",
        "Banswara",
        "Bhakra",
        "Bhalkhandi",
        "Bilhari",
        "Chako Khola",
        "Chakhai",
        "Chaman",
        "Churiyali",
        "Dadiwala",
        "Deonath",
        "Dhanadi",
        "Dholi",
        "Dhamawala",
        "Dhariwala",
        "Gadi Khata",
        "Gadi Khalsa",
        "Gaira",
        "Garhi",
        "Garhwal",
        "Ghasera",
        "Ghoga",
        "Gholi",
        "Ginder Khera",
        "Gokul",
        "Guruvayoor",
        "Haripura",
        "Jasu",
        "Jogiwala",
        "Kapli",
        "Khadak",
        "Khatra",
        "Khul",
        "Kolari",
        "Koshal",
        "Kothari",
        "Lankhedi",
        "Lalkua",
        "Malinwala",
        "Mandi",
        "Masuri",
        "Mayal",
        "Mehali",
        "Mewari",
        "Minpur",
        "Mohanpur",
        "Nayagaon",
        "Pali",
        "Pandukhal",
        "Rajendra Nagar",
        "Rajpur",
        "Rampur"
    ],
    default: "Rajpur"
},
  developer: { type: String},
  projectSocietyName: {type: String},
  Address: {type: String, maxlength: 256},
  buildingComplexName: {type: String},
  landZone: {type: String, enum:["Industrial","Commercial","Residential","Transport and Communication","Public Utilities","Public and Semi Public Use","Open Spaces","Agriculture Zone","Special Economic Zone","Natural Conservation Zone","Government Use"]},  
  fromCity: {type: String, enum:["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"], default:"Dehradun"},
  toCity: {type: String, enum:["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"], default:"Delhi"},
  fromCityLocality: {
    type: String,
    enum: [
        "Ajabpur Kalan",
        "Ajabpur Khurd",
        "Anand Vihar",
        "Balawala",
        "Bhandari Bagh",
        "Bhatta Kuffer",
        "Chukkuwala",
        "Clement Town",
        "Dalanwala",
        "Darshan Lal Chowk",
        "Dehradun Cantonment",
        "Dhamawala",
        "Doiwala",
        "Doon Vihar",
        "Dowling Road",
        "Dudhli",
        "Ghansali",
        "Gharonda",
        "Ghatta Banger",
        "Ghatta Khera",
        "Harrawala",
        "Hathi Pao",
        "Indira Nagar",
        "Jaitunwala",
        "Jakhan",
        "Jolly Grant",
        "Kandoli",
        "Kanwali Road",
        "Khadak Khera",
        "Khurbura",
        "Kirtipur",
        "Kulhan",
        "Malsi",
        "Manakpur",
        "Mangal Nagar",
        "Manda",
        "Mothrowala",
        "Mussoorie",
        "Nehrugram",
        "Niranjanpur",
        "Omaxe City",
        "Pahar Ganj",
        "Patel Nagar",
        "Pindar",
        "Prakash Nagar",
        "Rajpur",
        "Raipur",
        "Rajpur Road",
        "Rishikesh",
        "Sahastradhara",
        "Sahastradhara Road",
        "Salan Gaon",
        "Selaqui",
        "Sidhpur",
        "Sitaram",
        "Sunderwala",
        "Surkanda",
        "Tapovan",
        "Thano",
        "Tihari",
        "Timli",
        "Uttarakhand",
        "Vasant Vihar",
        "Vikasnagar",
        "Khandari",
        "Palsan",
        "Kharakhet",
        "Rishikesh",
        "Prem Nagar",
        "Balbir Road",
        "E.C. Road",
        "Kedar Camp",
        "Haridwar Road",
        "Bansal Enclave",
        "Indraprastha Colony",
        "FRI",
        "FRI Road",
        "Government Colony",
        "HEC",
        "HN Bahuguna Road",
        "I.I.T",
        "Kamal Ghat",
        "Laxman Chowk",
        "Malsi Deer Park",
        "Mukhani",
        "New Cantt",
        "Panditwadi",
        "Patel Chowk",
        "R.K. Puram",
        "Railway Road",
        "Rishi Nagar",
        "Road No. 7",
        "Sahastradhara",
        "Sahastradhara Road",
        "Sarai",
        "Sewa Nagar",
        "Silasro",
        "Sukhro",
        "Takda",
        "Tehri Road",
        "Vikas Nagar",
        "Bhaniawala",
        "Chitragupta Nagar",
        "Bhaniawala",
        "Dehu Khurd",
        "Ganeshpur",
        "Garhi Cantt",
        "Hathibarkala",
        "Hiwal",
        "Khandarwala",
        "Ladpur",
        "Laldhang",
        "Lather",
        "Manjwala",
        "Nahar Road",
        "Nargada",
        "Naya Gaon",
        "Nighasari",
        "Okhla",
        "Padampur",
        "Patniya",
        "Rajan Bhadri",
        "Rajpur Road",
        "Ramnagar",
        "Ramghat",
        "Rampur",
        "Raipur",
        "Rani Pokhari",
        "Sanik Colony",
        "Saraj",
        "Selaqui",
        "Sira Bazar",
        "Sondhi",
        "Srinagar",
        "Sudhakar Ghar",
        "Talla Bhal",
        "Talra",
        "Thandi Sadak",
        "Tikri",
        "Titiya",
        "Tuni",
        "Udaipur",
        "Vidya Niketan",
        "Wadi Bagh",
        "Ahluwalia",
        "Amritpur",
        "Babudhan",
        "Banswara",
        "Bhakra",
        "Bhalkhandi",
        "Bilhari",
        "Chako Khola",
        "Chakhai",
        "Chaman",
        "Churiyali",
        "Dadiwala",
        "Deonath",
        "Dhanadi",
        "Dholi",
        "Dhamawala",
        "Dhariwala",
        "Gadi Khata",
        "Gadi Khalsa",
        "Gaira",
        "Garhi",
        "Garhwal",
        "Ghasera",
        "Ghoga",
        "Gholi",
        "Ginder Khera",
        "Gokul",
        "Guruvayoor",
        "Haripura",
        "Jasu",
        "Jogiwala",
        "Kapli",
        "Khadak",
        "Khatra",
        "Khul",
        "Kolari",
        "Koshal",
        "Kothari",
        "Lankhedi",
        "Lalkua",
        "Malinwala",
        "Mandi",
        "Masuri",
        "Mayal",
        "Mehali",
        "Mewari",
        "Minpur",
        "Mohanpur",
        "Nayagaon",
        "Pali",
        "Pandukhal",
        "Rajendra Nagar",
        "Rajpur",
        "Rampur"
    ],
    default: "Rajpur"
},
  toCityLocality: {
    type: String,
    enum: [
        "Ajabpur Kalan",
        "Ajabpur Khurd",
        "Anand Vihar",
        "Balawala",
        "Bhandari Bagh",
        "Bhatta Kuffer",
        "Chukkuwala",
        "Clement Town",
        "Dalanwala",
        "Darshan Lal Chowk",
        "Dehradun Cantonment",
        "Dhamawala",
        "Doiwala",
        "Doon Vihar",
        "Dowling Road",
        "Dudhli",
        "Ghansali",
        "Gharonda",
        "Ghatta Banger",
        "Ghatta Khera",
        "Harrawala",
        "Hathi Pao",
        "Indira Nagar",
        "Jaitunwala",
        "Jakhan",
        "Jolly Grant",
        "Kandoli",
        "Kanwali Road",
        "Khadak Khera",
        "Khurbura",
        "Kirtipur",
        "Kulhan",
        "Malsi",
        "Manakpur",
        "Mangal Nagar",
        "Manda",
        "Mothrowala",
        "Mussoorie",
        "Nehrugram",
        "Niranjanpur",
        "Omaxe City",
        "Pahar Ganj",
        "Patel Nagar",
        "Pindar",
        "Prakash Nagar",
        "Rajpur",
        "Raipur",
        "Rajpur Road",
        "Rishikesh",
        "Sahastradhara",
        "Sahastradhara Road",
        "Salan Gaon",
        "Selaqui",
        "Sidhpur",
        "Sitaram",
        "Sunderwala",
        "Surkanda",
        "Tapovan",
        "Thano",
        "Tihari",
        "Timli",
        "Uttarakhand",
        "Vasant Vihar",
        "Vikasnagar",
        "Khandari",
        "Palsan",
        "Kharakhet",
        "Rishikesh",
        "Prem Nagar",
        "Balbir Road",
        "E.C. Road",
        "Kedar Camp",
        "Haridwar Road",
        "Bansal Enclave",
        "Indraprastha Colony",
        "FRI",
        "FRI Road",
        "Government Colony",
        "HEC",
        "HN Bahuguna Road",
        "I.I.T",
        "Kamal Ghat",
        "Laxman Chowk",
        "Malsi Deer Park",
        "Mukhani",
        "New Cantt",
        "Panditwadi",
        "Patel Chowk",
        "R.K. Puram",
        "Railway Road",
        "Rishi Nagar",
        "Road No. 7",
        "Sahastradhara",
        "Sahastradhara Road",
        "Sarai",
        "Sewa Nagar",
        "Silasro",
        "Sukhro",
        "Takda",
        "Tehri Road",
        "Vikas Nagar",
        "Bhaniawala",
        "Chitragupta Nagar",
        "Bhaniawala",
        "Dehu Khurd",
        "Ganeshpur",
        "Garhi Cantt",
        "Hathibarkala",
        "Hiwal",
        "Khandarwala",
        "Ladpur",
        "Laldhang",
        "Lather",
        "Manjwala",
        "Nahar Road",
        "Nargada",
        "Naya Gaon",
        "Nighasari",
        "Okhla",
        "Padampur",
        "Patniya",
        "Rajan Bhadri",
        "Rajpur Road",
        "Ramnagar",
        "Ramghat",
        "Rampur",
        "Raipur",
        "Rani Pokhari",
        "Sanik Colony",
        "Saraj",
        "Selaqui",
        "Sira Bazar",
        "Sondhi",
        "Srinagar",
        "Sudhakar Ghar",
        "Talla Bhal",
        "Talra",
        "Thandi Sadak",
        "Tikri",
        "Titiya",
        "Tuni",
        "Udaipur",
        "Vidya Niketan",
        "Wadi Bagh",
        "Ahluwalia",
        "Amritpur",
        "Babudhan",
        "Banswara",
        "Bhakra",
        "Bhalkhandi",
        "Bilhari",
        "Chako Khola",
        "Chakhai",
        "Chaman",
        "Churiyali",
        "Dadiwala",
        "Deonath",
        "Dhanadi",
        "Dholi",
        "Dhamawala",
        "Dhariwala",
        "Gadi Khata",
        "Gadi Khalsa",
        "Gaira",
        "Garhi",
        "Garhwal",
        "Ghasera",
        "Ghoga",
        "Gholi",
        "Ginder Khera",
        "Gokul",
        "Guruvayoor",
        "Haripura",
        "Jasu",
        "Jogiwala",
        "Kapli",
        "Khadak",
        "Khatra",
        "Khul",
        "Kolari",
        "Koshal",
        "Kothari",
        "Lankhedi",
        "Lalkua",
        "Malinwala",
        "Mandi",
        "Masuri",
        "Mayal",
        "Mehali",
        "Mewari",
        "Minpur",
        "Mohanpur",
        "Nayagaon",
        "Pali",
        "Pandukhal",
        "Rajendra Nagar",
        "Rajpur",
        "Rampur"
    ],
    default: "Sahastradhara Road"
},
  idealForBusinesses: {type: [String], enum:[
    "Private Company",
    "Individual Business",
    "Self Employed Business",
    "Boutique",
    "Departmental Clinic",
    "Cake Shop",
    "Mobile Service Center",
    "R&D center",
    "Research Center",
    "High Security Setup",
    "Sales/Marketing Office",
    "Back office",
    "Front Office",
    "24X7",
    "Tuition",
    "Education",
    "Lounge",
    "Cafe",
    "IT Training Center",
    "Non IT training center",
    "Logistics Back Office",
    "Banks",
    "Shipment",
    "Packaging Back office",
    "Advertising",
    "Travel Agency",
    "Backend Office",
    "Advocate",
    "Frontend Office",
    "Advocate Office",
    "Architect Office",
    "Small Office Purpose",
    "ATM",
    "Bank branch",
    "Banking",
    "Finance",
    "Banks and NBFC",
    "Insurance and Mutual Fund Companies",
    "Share Brokers",
    "Banquet Hall",
    "Bar and Restaurant",
    "Boutique Office",
    "Events and Promotions",
    "Builders and Architects",
    "Builders and Developers",
    "CA Office",
    "Traders Office",
    "Self Employed Professionals",
    "Start Ups",
    "Lawyers",
    "Tax Consultants",
    "Law Chamber",
    "Company Head Office",
    "Company Regional Office",
    "Company Marketing Office",
    "Educational Registration Office",
    "Area Sales Office",
    "Chartered Accountant",
    "Law Company",
    "Online Marketing Office",
    "Digital Marketing Office",
    "Recruitments Company",
    "Business Operations Office",
    "Job Consulting",
    "Computer Training",
    "Construction Office",
    "E-Commerce",
    "Gym/Fitness Centre",
    "Hospital",
    "Hotel",
    "Showroom",
    "Guest House",
    "Insurance Company",
    "Multi Specialty Hospital",
    "Training Institute",
    "Call Center/BPO",
    "Coaching Center",
    "Private Consulting",
    "Doctor Clinic",
    "Pathology",
    "IT/ITES and Related",
    "Studio/Production house",
    "Private Office",
    "Health Care",
    "Corporate Office Setup",
    "Women Safety"
  ]},
  nearbyBusinesses: {type: [String], enum:[
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

  floorsAllowed: {type: Number, minlength:1, maxlength: 250},
  openSides: {type: Number, minlength:1, maxlength:4},
  facingRoadWidth: {type: Number},
  boundaryWall: {type: Boolean, default: false},
  gatedColony: {type: Boolean, default: false},
  
  //approvedBy: {type: String, enum: ["Local Authority"]},

  bedrooms:{ type: Number, minlength:1, maxlength: 20},
  balconies:{ type: Number, minlength:1, maxlength: 20},
  bathrooms: {type: Number, maxlength: 20},

  floorNumber: {type: String, enum:["Lower Basement","Upper Basement","Ground","1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16",]},
  totalFloor: {type: Number, minlength:1, maxlength: 250},
  furnished: {type: String, enum: ["Semi-Furnished","Furnished", "Unfurnished"]},
  
  personalWashroom: {type: Boolean, default:"false"},
  pantryCafeteria: {type: String, enum:["Dry","Wet","Not Available"]},

  cornerShop: {type: Boolean, default: false},
  mainRoadFacing: {type: Boolean, default: false},

  anyConstructionDone: {type: Boolean, default: false},

  BHKType:  { type: String, enum: ["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK",">5 BHK"]},
  flooring: {type: String, enum: ["Ceramic Tiles","Wooden","Vitrified","Marble","Granite"]},


  //Property Area

  plotArea: { type: Number},
  plotAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  lengthdimension: { type: Number},
  widthdimension: { type: Number},
  cornerPlot: {type: Boolean,default: false},

  coveredArea: { type: Number},

  carpetArea: { type: Number},
  superArea: { type: Number},
  carpetAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  superAreaUnit: { type:String, enum:["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]},
  
  entranceWidth: { type: Number},
  entranceWidthUnit: {type:String, enum:["ft","meters"]},

  //Transaction Type & Property Availability & Ownership
  ownership: { type: String, enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"]},
  transactionType: { type: String, enum: ["New Property","Resale"]},
  possessionStatus: {type: String, enum: ["Ready To Move", "Under Construction"]},
  currentlyLeasedOut: {type: Boolean, default: false},

  //Property Price

  expectedPrice: {type: Number},
  bookingAmount: {type: Number},
  priceNegotiable: {type: Boolean,default: false},
  taxAndGovtChargesExcluded: {type: Boolean,default: false},
  allInclusivePrice: {type: Boolean,default: false},

  //Amenities/Unique Features
  additionalRooms:{ type: String, enum:["Store Room","Puja Room","Servant Room"]},
  residentialAmenities: {
    type: [String],
    enum: [
      "Reserved Parking",
      "Visitor Parking",
      "Lift",
      "Power Backup",
      "Gas Pipeline",
      "Park",
      "Kids Play Area",
      "Gymnasium",
      "Swimming Pool",
      "Club House",
      "Air Conditioned",
      "Vaastu Compliance",
      "Internet/Wi-Fi",
      "Security Personnel",
      "CCTV Camera",
      "Jogging Track",
      "Party Lawn",
      "Indoor Games Room",
      "Fire Safety",
      "Intercom Facility",
      "Solar Power Panels",
      "Gated Community",
      "Water Purifier",
      "Laundry Service",
      "Pet-Friendly Area",
      "Meditation Zone"
    ]
  },

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
    ]
  },
  landAmenities: {
    type: String, 
    enum: ["Maintenance Staff","Water Storage","Rain Water Harvesting","Feng Shui / Vaastu Compliant",]
  },
  locationAdvantages: {
    type: String,
    enum: [
      "Close to Metro Station",
      "Close to School",
      "Close to Hospital",
      "Close to Market",
      "Close to Railway Station",
      "Close to Airport",
      "Close to Mall",
      "Close to Highway",
      "Close to Bus Stop",
      "Close to IT Park",
      "Close to Industrial Area",
      "Close to University",
      "Close to Park",
      "Close to Government Office",
      "Close to Sports Complex",
      "Close to Commercial Hub",
      "Close to Entertainment Zone"
    ]
  },
  overlooking: {type: String, enum:["Pool","Garden/Park","Main Road","Club","Others","Hills","Lake","River","Open Land","Forest","City Skyline","Residential Area","Commercial Area","Farmland","Mountains"]},
  facing: {type: String, enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]},
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;