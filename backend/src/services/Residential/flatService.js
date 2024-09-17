const Flat = require('../../models/Flat'); // Assuming Flat model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Flat
const createFlat = async (flatData) => {
  // Add validation for uniqueness if needed
  const flat = new Flat();

  // Assigning data to flat fields
  flat.numberOfFlatsInSociety = flatData.numberOfFlatsInSociety;
  flat.city = flatData.city;
  flat.locality = flatData.locality;
  flat.projectSocietyName = flatData.projectSocietyName;
  flat.Address = flatData.Address;
  flat.bedrooms = flatData.bedrooms;
  flat.balconies = flatData.balconies;
  flat.floorNumber = flatData.floorNumber;
  flat.totalFloor = flatData.totalFloor;
  flat.furnished = flatData.furnished;
  flat.bathrooms = flatData.bathrooms;
  flat.superArea = flatData.superArea;
  flat.carpetArea = flatData.carpetArea;
  flat.areaUnit = flatData.areaUnit;
  flat.possessionStatus = flatData.possessionStatus;
  flat.availableFromMonth = flatData.availableFromMonth;
  flat.availableFromYear = flatData.availableFromYear;
  flat.constructionAge = flatData.constructionAge;
  flat.expectedPrice = flatData.expectedPrice;
  flat.bookingAmount = flatData.bookingAmount;
  flat.priceNegotiable = flatData.priceNegotiable;
  flat.transactionType = flatData.transactionType;
  flat.overlooking = flatData.overlooking;
  flat.facing = flatData.facing;
  flat.flatType = flatData.flatType;
  flat.flooring = flatData.flooring;
  flat.developer = flatData.developer;
  flat.ownership = flatData.ownership;
  flat.additionalRooms = flatData.additionalRooms;
  flat.amenities = flatData.amenities;

  return await flat.save();
};

// Get all Flats
const getAllFlats = async () => {
  return await Flat.find();
};

// Get Flat by ID
const getFlatById = async (flatId) => {
  const flat = await Flat.findById(flatId);
  if (!flat) {
    throw new NotFoundError('Flat not found');
  }
  return flat;
};

// Update Flat by ID
const updateFlat = async (flatId, updateData) => {
  const flat = await Flat.findById(flatId);
  if (!flat) {
    throw new NotFoundError('Flat not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'numberOfFlatsInSociety', 'city', 'locality', 'projectSocietyName', 'Address',
    'bedrooms', 'balconies', 'floorNumber', 'totalFloor', 'furnished', 'bathrooms',
    'superArea', 'carpetArea', 'areaUnit', 'possessionStatus', 'availableFromMonth',
    'availableFromYear', 'constructionAge', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'transactionType', 'overlooking', 'facing', 'flatType',
    'flooring', 'developer', 'ownership', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      flat[field] = updateData[field];
    }
  });

  return await flat.save();
};

// Delete Flat by ID
const deleteFlat = async (flatId) => {
  const flat = await Flat.findByIdAndDelete(flatId);
  if (!flat) {
    throw new NotFoundError('Flat not found');
  }
  return flat;
};

module.exports = {
  createFlat,
  getAllFlats,
  getFlatById,
  updateFlat,
  deleteFlat,
};
