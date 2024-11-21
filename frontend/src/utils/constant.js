const residentialPropertyTypeList = [
  "all residential",
  "flat/apartment",
  "residential house",
  "villa",
  "builder floor apartment",
  "residential land/plot",
  "penthouse",
  "studio apartment",
];

const NumberOfFlat = ["<50", "50-100", ">100"];

const overLookingValue = [
  { value: "Pool", label: "Pool" },
  { value: "Garden", label: "Garden" },
  { value: "Main Road", label: "Main Road" },
  { value: "Club", label: "Club" },
  { value: "Others", label: "Others" },
  { value: "Hills", label: "Hills" },
  { value: "Lake", label: "Lake" },
  { value: "River", label: "River" },
  { value: "Open Land", label: "Open Land" },
  { value: "Forest", label: "Forest" },
  { value: "City", label: "City" },
];

const facingValue = [
  "North",
  "South",
  "West",
  "East",
  "North-East",
  "North-West",
  "South-West",
  "South-East",
];

const locationAdvantage = [
  { value: "Close To Metro Station", label: "Close To Metro Station" },
  { value: "Close To School", label: "Close To School" },
  { value: "Close To Hospital", label: "Close To Hospital" },
  { value: "Close To Markit", label: "Close To Markit" },
  { value: "Close To Railway Station", label: "Close To Railway Station" },
  { value: "Close To Airport", label: "Close To Airport" },
  { value: "Close To Mall", label: "Close To Mall" },
  { value: "Close To Highway", label: "Close To Highway" },
  { value: "Close To Bus Stop", label: "Close To Bus Stop" },
  { value: "Close To IT Park", label: "Close To IT Park" },
  { value: "Close To Industrial Area", label: "Close To Industrial Area" },
  { value: "Close To University", label: "Close To University" },
  { value: "Close To Park", label: "Close To Park" },
  {
    value: "Close To Government Office",
    label: "Close To Government Office",
  },
  { value: "Close To Sport Complex", label: "Close To Sport Complex" },
  { value: "Close To Commercial Hub", label: "Close To Commercial Hub" },
  {
    value: "Close To Entertainment Zone",
    label: "Close To Entertainment Zone",
  },
];

const residentialAmenities = [
  { value: "Reserved Parking", label: "Reserved Parking" },
  { value: "Visitor Parking", label: "Visitor Parking" },
  { value: "Lift", label: "Lift" },
  { value: "Power Backup", label: "Power Backup" },
  { value: "Gas Pipeline", label: "Gas Pipeline" },
  { value: "Park", label: "Park" },
  { value: "Kids Play Area", label: "Kids Play Area" },
  { value: "Gymnasium", label: "Gymnasium" },
  { value: "Swimming Pool", label: "Swimming Pool" },
  { value: "Club House", label: "Club House" },
  { value: "Air Conditioned", label: "Air Conditioned" },
  { value: "Vaastu Compliance", label: "Vaastu Compliance" },
  { value: "Internet/Wi-Fi", label: "Internet/Wi-Fi" },
  {
    value: "Security Personnel",
    label: "Security Personnel",
  },
  { value: "CCTV Camera", label: "CCTV Camera" },
  { value: "Jogging Track", label: "Jogging Track" },
  {
    value: "Party Lawn",
    label: "Party Lawn",
  },
  {
    value: "Gated Community",
    label: "Gated Community",
  },
  {
    value: "Water Purifier",
    label: "Water Purifier",
  },
  {
    value: "Laundry Service",
    label: "Laundry Service",
  },
  {
    value: "Pet-Friendly Area",
    label: "Pet-Friendly Area",
  },
  {
    value: "Meditation Zone",
    label: "Meditation Zone",
  },
  {
    value: "Indoor Games Room",
    label: "Indoor Games Room",
  },
  {
    value: "Fire Safety",
    label: "Fire Safety",
  },
  {
    value: "Intercom Facility",
    label: "Intercom Facility",
  },
  {
    value: "Solar Power Panels",
    label: "Solar Power Panels",
  },
];

const commercialOverLookingValue = [
  { value: "Pool", label: "Pool" },
  { value: "Garden/Park", label: "Garden/Park" },
  { value: "Main Road", label: "Main Road" },
];

const commercialLocationAdvantage = [
  { value: "Reserved Parking", label: "Reserved Parking" },
  { value: "Visitor Parking", label: "Visitor Parking" },
  { value: "Lift", label: "Lift" },
  { value: "Power Backup", label: "Power Backup" },
  { value: "Gas Pipeline", label: "Gas Pipeline" },
  { value: "Park", label: "Park" },
  { value: "Kids Play Area", label: "Kids Play Area" },
  { value: "Gymnasium", label: "Gymnasium" },
  { value: "Swimming Pool", label: "Swimming Pool" },
  { value: "Club House", label: "Club House" },
  { value: "Air Conditioned", label: "Air Conditioned" },
  { value: "Vaastu Compliance", label: "Vaastu Compliance" },
  { value: "Internet/Wi-Fi", label: "Internet/Wi-Fi" },
  {
    value: "Security Personnel",
    label: "Security Personnel",
  },
  { value: "CCTV Camera", label: "CCTV Camera" },
];

const commercialIdealForBusinesses = [
  { value: "Private Company", label: "Private Company" },
  { value: "Individual Business", label: "Individual Business" },
  { value: "Self Employed Business", label: "Self Employed Business" },
  { value: "Boutique", label: "Boutique" },
  { value: "Departmental Clinic", label: "Departmental Clinic" },
  { value: "Cake Shop", label: "Cake Shop" },
  { value: "Mobile Service Center", label: "Mobile Service Center" },
  { value: "R&D center", label: "R&D center" },
  { value: "Research Center", label: "Research Center" },
  { value: "High Security Setup", label: "High Security Setup" },
  { value: "Sales/Marketing Office", label: "Sales/Marketing Office" },
  { value: "Back office", label: "Back office" },
  { value: "Front Office", label: "Front Office" },
  {
    value: "24X7",
    label: "24X7",
  },
  { value: "Tuition", label: "Tuition" },
  { value: "Education", label: "Education" },
  { value: "Lounge", label: "Lounge" },
  { value: "Cafe", label: "Cafe" },
  { value: "IT Training Center", label: "IT Training Center" },
  { value: "Non IT training center", label: "Lounge" },
  { value: "Logistics Back Office", label: "Logistics Back Office" },
  { value: "Banks", label: "Lounge" },
  { value: "Shipment", label: "Shipment" },
  { value: "Packaging Back office", label: "Packaging Back office" },
  { value: "Advertising", label: "Lounge" },
  { value: "Travel Agency", label: "Travel Agency" },
  { value: "Backend Office", label: "Backend Office" },
  { value: "Advocate", label: "Advocate" },
  { value: "Frontend Office", label: "Frontend Office" },
  { value: "Advocate Office", label: "Advocate Office" },
  { value: "Architect Office", label: "Architect Office" },
  { value: "Small Office Purpose", label: "Small Office Purpose" },
  { value: "ATM", label: "ATM" },
  { value: "Bank branch", label: "Bank branch" },
  { value: "Banking", label: "Banking" },
  { value: "Finance", label: "Finance" },
  { value: "Banks and NBFC", label: "Banks and NBFC" },
  {
    value: "Insurance and Mutual Fund Companies",
    label: "Insurance and Mutual Fund Companies",
  },
  { value: "Share Brokers", label: "Share Brokers" },
  { value: "Banquet Hall", label: "Banquet Hall" },
  { value: "Bar and Restaurant", label: "Bar and Restaurant" },
  { value: "Boutique Office", label: "Boutique Office" },
  { value: "Events and Promotions", label: "Events and Promotions" },
  { value: "Builders and Architects", label: "Builders and Architects" },
  { value: "Builders and Developers", label: "Builders and Developers" },
  { value: "CA Office", label: "CA Office" },
  { value: "Traders Office", label: "Traders Office" },
  {
    value: "Self Employed Professionals",
    label: "Self Employed Professionals",
  },
  { value: "Start Ups", label: "Start Ups" },
  { value: "Lawyers", label: "Lawyers" },
  { value: "Tax Consultants", label: "Tax Consultants" },
  { value: "Law Chamber", label: "Law Chamber" },
  { value: "Company Head Office", label: "Company Head Office" },
  { value: "Company Regional Office", label: "Company Regional Office" },
  { value: "Company Marketing Office", label: "Company Marketing Office" },
  {
    value: "Educational Registration Office",
    label: "Educational Registration Office",
  },
  { value: "Area Sales Office", label: "Area Sales Office" },
  { value: "Chartered Accountant", label: "Chartered Accountant" },
  { value: "Law Company", label: "Law Company" },
  { value: "Online Marketing Office", label: "Online Marketing Office" },
  { value: "Digital Marketing Office", label: "Digital Marketing Office" },
  { value: "Recruitment's Company", label: "Recruitment's Company" },
  { value: "Business Operations Office", label: "Business Operations Office" },
  { value: "Job Consulting", label: "Job Consulting" },
  { value: "Computer Training", label: "Computer Training" },
  { value: "Construction Office", label: "Construction Office" },
  { value: "E-Commerce", label: "E-Commerce" },
  { value: "Gym/Fitness Centre", label: "Gym/Fitness Centre" },
  { value: "Hospital", label: "Hospital" },
  { value: "Hotel", label: "Hotel" },
  { value: "Showroom", label: "Showroom" },
  { value: "Guest House", label: "Guest House" },
  { value: "Insurance Company", label: "Insurance Company" },
  { value: "Multi Specialty Hospital", label: "Multi Specialty Hospital" },
  { value: "Training Institute", label: "Training Institute" },
  { value: "Call Center/BPO", label: "Call Center/BPO" },
  { value: "Coaching Center", label: "Coaching Center" },
  { value: "Private Consulting", label: "Private Consulting" },
  { value: "Doctor Clinic", label: "Doctor Clinic" },
  { value: "Pathology", label: "Pathology" },
  { value: "IT/ITES and Related", label: "IT/ITES and Related" },
  { value: "Studio/Production house", label: "Studio/Production house" },
  { value: "Private Office", label: "Private Office" },
  { value: "Health Care", label: "Health Care" },
  { value: "Corporate Office Setup", label: "Corporate Office Setup" },
  { value: "Women Safety", label: "Women Safety" },
];

const priceRange = ["Under Rs 50 Lac", "Rs 50 lac - Rs 1cr"];

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: "#69B99D", // Change border color based on focus
    padding: "5px",
    "&:hover": {
      borderColor: "#69B99D", // Change border color on hover
    },
  }),
};

export {
  customStyles,
  locationAdvantage,
  facingValue,
  overLookingValue,
  residentialPropertyTypeList,
  NumberOfFlat,
  residentialAmenities,
  commercialOverLookingValue,
  commercialLocationAdvantage,
  commercialIdealForBusinesses,
};
