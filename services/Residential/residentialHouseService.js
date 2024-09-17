const ResidentialHouse = require('../../models/ResidentialHouse'); // Assuming ResidentialHouse model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new ResidentialHouse
const createResidentialHouse = async (houseData) => {
  // Validate or check for uniqueness if required
  const residentialHouse = new ResidentialHouse();

  // Assigning data to residential house fields
  residentialHouse.city = houseData.city;
  residentialHouse.locality = houseData.locality;
  residentialHouse.projectSocietyName = houseData.projectSocietyName;
  residentialHouse.Address = houseData.Address;
  residentialHouse.bedrooms = houseData.bedrooms;
  residentialHouse.balconies = houseData.balconies;
  residentialHouse.floorNumber = houseData.floorNumber;
  residentialHouse.totalFloor = houseData.totalFloor;
  residentialHouse.furnished = houseData.furnished;
  residentialHouse.bathrooms = houseData.bathrooms;
  residentialHouse.floorsAllowed = houseData.floorsAllowed;
  residentialHouse.openSides = houseData.openSides;
  residentialHouse.facingRoadWidth = houseData.facingRoadWidth;
  residentialHouse.coveredArea = houseData.coveredArea;
  residentialHouse.plotArea = houseData.plotArea;
  residentialHouse.areaUnit = houseData.areaUnit;
  residentialHouse.cornerPlot = houseData.cornerPlot;
  residentialHouse.possessionStatus = houseData.possessionStatus;
  residentialHouse.availableFromMonth = houseData.availableFromMonth;
  residentialHouse.availableFromYear = houseData.availableFromYear;
  residentialHouse.constructionAge = houseData.constructionAge;
  residentialHouse.expectedPrice = houseData.expectedPrice;
  residentialHouse.bookingAmount = houseData.bookingAmount;
  residentialHouse.priceNegotiable = houseData.priceNegotiable;
  residentialHouse.villaType = houseData.villaType;
  residentialHouse.ownership = houseData.ownership;
  residentialHouse.flooring = houseData.flooring;
  residentialHouse.transactionType = houseData.transactionType;
  residentialHouse.overlooking = houseData.overlooking;
  residentialHouse.facing = houseData.facing;
  residentialHouse.additionalRooms = houseData.additionalRooms;
  residentialHouse.amenities = houseData.amenities;

  return await residentialHouse.save();
};

// Get all Residential Houses
const getAllResidentialHouses = async () => {
  return await ResidentialHouse.find();
};

// Get Residential House by ID
const getResidentialHouseById = async (houseId) => {
  const residentialHouse = await ResidentialHouse.findById(houseId);
  if (!residentialHouse) {
    throw new NotFoundError('Residential house not found');
  }
  return residentialHouse;
};

// Update Residential House by ID
const updateResidentialHouse = async (houseId, updateData) => {
  const residentialHouse = await ResidentialHouse.findById(houseId);
  if (!residentialHouse) {
    throw new NotFoundError('Residential house not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms', 'balconies', 'floorNumber',
    'totalFloor', 'furnished', 'bathrooms', 'floorsAllowed', 'openSides', 'facingRoadWidth',
    'coveredArea', 'plotArea', 'areaUnit', 'cornerPlot', 'possessionStatus', 'availableFromMonth',
    'availableFromYear', 'constructionAge', 'expectedPrice', 'bookingAmount', 'priceNegotiable',
    'villaType', 'ownership', 'flooring', 'transactionType', 'overlooking', 'facing',
    'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      residentialHouse[field] = updateData[field];
    }
  });

  return await residentialHouse.save();
};

// Delete Residential House by ID
const deleteResidentialHouse = async (houseId) => {
  const residentialHouse = await ResidentialHouse.findByIdAndDelete(houseId);
  if (!residentialHouse) {
    throw new NotFoundError('Residential house not found');
  }
  return residentialHouse;
};

module.exports = {
  createResidentialHouse,
  getAllResidentialHouses,
  getResidentialHouseById,
  updateResidentialHouse,
  deleteResidentialHouse,
};

