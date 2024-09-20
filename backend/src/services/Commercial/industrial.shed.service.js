const IndustrialShed = require('../../models/industrial.shed.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Industrial Shed
const createIndustrialShed = async (shedData) => {
  const industrialShed = new IndustrialShed();

  // Assigning data to industrial shed fields
  industrialShed.city = shedData.city;
  industrialShed.locality = shedData.locality;
  industrialShed.Address = shedData.Address;
  industrialShed.landZone = shedData.landZone;
  industrialShed.floorsAllowed = shedData.floorsAllowed;
  industrialShed.openSides = shedData.openSides;
  industrialShed.facingRoadWidth = shedData.facingRoadWidth;
  industrialShed.superArea = shedData.superArea;
  industrialShed.areaUnit = shedData.areaUnit;
  industrialShed.possessionStatus = shedData.possessionStatus;
  industrialShed.availableFromMonth = shedData.availableFromMonth;
  industrialShed.availableFromYear = shedData.availableFromYear;
  industrialShed.constructionAge = shedData.constructionAge;
  industrialShed.currentlyLeasedOut = shedData.currentlyLeasedOut;
  industrialShed.expectedPrice = shedData.expectedPrice;
  industrialShed.bookingAmount = shedData.bookingAmount;
  industrialShed.priceNegotiable = shedData.priceNegotiable;
  industrialShed.ownership = shedData.ownership;
  industrialShed.transactionType = shedData.transactionType;
  industrialShed.overlooking = shedData.overlooking;
  industrialShed.facing = shedData.facing;
  industrialShed.additionalRooms = shedData.additionalRooms;
  industrialShed.amenities = shedData.amenities;

  return await industrialShed.save();
};

// Get all Industrial Sheds
const getAllIndustrialSheds = async () => {
  return await IndustrialShed.find();
};

// Get Industrial Shed by ID
const getIndustrialShedById = async (shedId) => {
  const industrialShed = await IndustrialShed.findById(shedId);
  if (!industrialShed) {
    throw new NotFoundError('Industrial Shed not found');
  }
  return industrialShed;
};

// Update Industrial Shed by ID
const updateIndustrialShed = async (shedId, updateData) => {
  const industrialShed = await IndustrialShed.findById(shedId);
  if (!industrialShed) {
    throw new NotFoundError('Industrial Shed not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'Address', 'landZone', 'floorsAllowed',
    'openSides', 'facingRoadWidth', 'superArea', 'areaUnit', 'possessionStatus',
    'availableFromMonth', 'availableFromYear', 'constructionAge',
    'currentlyLeasedOut', 'expectedPrice', 'bookingAmount', 'priceNegotiable',
    'ownership', 'transactionType', 'overlooking', 'facing', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      industrialShed[field] = updateData[field];
    }
  });

  return await industrialShed.save();
};

// Delete Industrial Shed by ID
const deleteIndustrialShed = async (shedId) => {
  const industrialShed = await IndustrialShed.findByIdAndDelete(shedId);
  if (!industrialShed) {
    throw new NotFoundError('Industrial Shed not found');
  }
  return industrialShed;
};

module.exports = {
  createIndustrialShed,
  getAllIndustrialSheds,
  getIndustrialShedById,
  updateIndustrialShed,
  deleteIndustrialShed,
};
