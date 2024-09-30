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

const priceRange = ["Under Rs 50 Lac", "Rs 50 lac - Rs 1cr"];

export {
  locationAdvantage,
  facingValue,
  overLookingValue,
  residentialPropertyTypeList,
  NumberOfFlat,
  residentialAmenities,
};
