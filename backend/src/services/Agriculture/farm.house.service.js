const FarmHouse = require('../../models/farm.house.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new FarmHouse
const createFarmHouse = async (farmHouseData) => {
  const farmHouse = new FarmHouse();

  // Assigning data to FarmHouse fields
  farmHouse.city = farmHouseData.city;
  farmHouse.locality = farmHouseData.locality;
  farmHouse.projectSocietyName = farmHouseData.projectSocietyName;
  farmHouse.Address = farmHouseData.Address;
  farmHouse.bedrooms = farmHouseData.bedrooms;
  farmHouse.totalFloor = farmHouseData.totalFloor;
  farmHouse.furnished = farmHouseData.furnished;
  farmHouse.bathrooms = farmHouseData.bathrooms;
  farmHouse.floorsAllowed = farmHouseData.floorsAllowed;
  farmHouse.openSides = farmHouseData.openSides;
  farmHouse.facingRoadWidth = farmHouseData.facingRoadWidth;
  farmHouse.carpetArea = farmHouseData.carpetArea;
  farmHouse.superArea = farmHouseData.superArea;
  farmHouse.areaUnit = farmHouseData.areaUnit;
  farmHouse.possessionStatus = farmHouseData.possessionStatus;
  farmHouse.availableFromMonth = farmHouseData.availableFromMonth;
  farmHouse.availableFromYear = farmHouseData.availableFromYear;
  farmHouse.constructionAge = farmHouseData.constructionAge;
  farmHouse.expectedPrice = farmHouseData.expectedPrice;
  farmHouse.bookingAmount = farmHouseData.bookingAmount;
  farmHouse.priceNegotiable = farmHouseData.priceNegotiable;
  farmHouse.ownership = farmHouseData.ownership;
  farmHouse.flooring = farmHouseData.flooring;
  farmHouse.transactionType = farmHouseData.transactionType;
  farmHouse.overlooking = farmHouseData.overlooking;
  farmHouse.facing = farmHouseData.facing;
  farmHouse.additionalRooms = farmHouseData.additionalRooms;
  farmHouse.amenities = farmHouseData.amenities;

  return await farmHouse.save();
};

// Get all FarmHouses
const getAllFarmHouses = async () => {
  return await FarmHouse.find();
};

// Get FarmHouse by ID
const getFarmHouseById = async (farmHouseId) => {
  const farmHouse = await FarmHouse.findById(farmHouseId);
  if (!farmHouse) {
    throw new NotFoundError('FarmHouse not found');
  }
  return farmHouse;
};

// Update FarmHouse by ID
const updateFarmHouse = async (farmHouseId, updateData) => {
  const farmHouse = await FarmHouse.findById(farmHouseId);
  if (!farmHouse) {
    throw new NotFoundError('FarmHouse not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms',
    'totalFloor', 'furnished', 'bathrooms', 'floorsAllowed', 'openSides',
    'facingRoadWidth', 'carpetArea', 'superArea', 'areaUnit', 'possessionStatus',
    'availableFromMonth', 'availableFromYear', 'constructionAge', 'expectedPrice',
    'bookingAmount', 'priceNegotiable', 'ownership', 'flooring', 'transactionType',
    'overlooking', 'facing', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      farmHouse[field] = updateData[field];
    }
  });

  return await farmHouse.save();
};

// Delete FarmHouse by ID
const deleteFarmHouse = async (farmHouseId) => {
  const farmHouse = await FarmHouse.findByIdAndDelete(farmHouseId);
  if (!farmHouse) {
    throw new NotFoundError('FarmHouse not found');
  }
  return farmHouse;
};

module.exports = {
  createFarmHouse,
  getAllFarmHouses,
  getFarmHouseById,
  updateFarmHouse,
  deleteFarmHouse,
};
