const IndustrialBuilding = require('../../models/industrial.building.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Industrial Building
const createIndustrialBuilding = async (buildingData) => {
  const industrialBuilding = new IndustrialBuilding();

  // Assigning data to industrial building fields
  industrialBuilding.city = buildingData.city;
  industrialBuilding.locality = buildingData.locality;
  industrialBuilding.Address = buildingData.Address;
  industrialBuilding.landZone = buildingData.landZone;
  industrialBuilding.totalFloor = buildingData.totalFloor;
  industrialBuilding.floorsAllowed = buildingData.floorsAllowed;
  industrialBuilding.superArea = buildingData.superArea;
  industrialBuilding.areaUnit = buildingData.areaUnit;
  industrialBuilding.possessionStatus = buildingData.possessionStatus;
  industrialBuilding.availableFromMonth = buildingData.availableFromMonth;
  industrialBuilding.availableFromYear = buildingData.availableFromYear;
  industrialBuilding.constructionAge = buildingData.constructionAge;
  industrialBuilding.currentlyLeasedOut = buildingData.currentlyLeasedOut;
  industrialBuilding.expectedPrice = buildingData.expectedPrice;
  industrialBuilding.bookingAmount = buildingData.bookingAmount;
  industrialBuilding.priceNegotiable = buildingData.priceNegotiable;
  industrialBuilding.ownership = buildingData.ownership;
  industrialBuilding.transactionType = buildingData.transactionType;
  industrialBuilding.overlooking = buildingData.overlooking;
  industrialBuilding.facing = buildingData.facing;
  industrialBuilding.additionalRooms = buildingData.additionalRooms;
  industrialBuilding.amenities = buildingData.amenities;

  return await industrialBuilding.save();
};

// Get all Industrial Buildings
const getAllIndustrialBuildings = async () => {
  return await IndustrialBuilding.find();
};

// Get Industrial Building by ID
const getIndustrialBuildingById = async (buildingId) => {
  const industrialBuilding = await IndustrialBuilding.findById(buildingId);
  if (!industrialBuilding) {
    throw new NotFoundError('Industrial Building not found');
  }
  return industrialBuilding;
};

// Update Industrial Building by ID
const updateIndustrialBuilding = async (buildingId, updateData) => {
  const industrialBuilding = await IndustrialBuilding.findById(buildingId);
  if (!industrialBuilding) {
    throw new NotFoundError('Industrial Building not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'Address', 'landZone', 'totalFloor',
    'floorsAllowed', 'superArea', 'areaUnit', 'possessionStatus',
    'availableFromMonth', 'availableFromYear', 'constructionAge',
    'currentlyLeasedOut', 'expectedPrice', 'bookingAmount', 'priceNegotiable',
    'ownership', 'transactionType', 'overlooking', 'facing', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      industrialBuilding[field] = updateData[field];
    }
  });

  return await industrialBuilding.save();
};

// Delete Industrial Building by ID
const deleteIndustrialBuilding = async (buildingId) => {
  const industrialBuilding = await IndustrialBuilding.findByIdAndDelete(buildingId);
  if (!industrialBuilding) {
    throw new NotFoundError('Industrial Building not found');
  }
  return industrialBuilding;
};

module.exports = {
  createIndustrialBuilding,
  getAllIndustrialBuildings,
  getIndustrialBuildingById,
  updateIndustrialBuilding,
  deleteIndustrialBuilding,
};
