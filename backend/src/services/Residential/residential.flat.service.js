const ResidentialFlat = require('../../models/residential.flat.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new ResidentialFlat
const createResidentialFlat = async (residentialFlatData) => {
  // Add validation for uniqueness if needed
  const residentialFlat = new ResidentialFlat();

  // Assigning data to residentialFlat fields
  residentialFlat.numberOfFlatsInSociety = residentialFlatData.numberOfFlatsInSociety;
  residentialFlat.city = residentialFlatData.city;
  residentialFlat.locality = residentialFlatData.locality;
  residentialFlat.projectSocietyName = residentialFlatData.projectSocietyName;
  residentialFlat.Address = residentialFlatData.Address;
  residentialFlat.bedrooms = residentialFlatData.bedrooms;
  residentialFlat.balconies = residentialFlatData.balconies;
  residentialFlat.floorNumber = residentialFlatData.floorNumber;
  residentialFlat.totalFloor = residentialFlatData.totalFloor;
  residentialFlat.furnished = residentialFlatData.furnished;
  residentialFlat.bathrooms = residentialFlatData.bathrooms;
  residentialFlat.superArea = residentialFlatData.superArea;
  residentialFlat.carpetArea = residentialFlatData.carpetArea;
  residentialFlat.areaUnit = residentialFlatData.areaUnit;
  residentialFlat.possessionStatus = residentialFlatData.possessionStatus;
  residentialFlat.availableFromMonth = residentialFlatData.availableFromMonth;
  residentialFlat.availableFromYear = residentialFlatData.availableFromYear;
  residentialFlat.constructionAge = residentialFlatData.constructionAge;
  residentialFlat.expectedPrice = residentialFlatData.expectedPrice;
  residentialFlat.bookingAmount = residentialFlatData.bookingAmount;
  residentialFlat.priceNegotiable = residentialFlatData.priceNegotiable;
  residentialFlat.transactionType = residentialFlatData.transactionType;
  residentialFlat.overlooking = residentialFlatData.overlooking;
  residentialFlat.facing = residentialFlatData.facing;
  residentialFlat.residentialFlatType = residentialFlatData.residentialFlatType;
  residentialFlat.flooring = residentialFlatData.flooring;
  residentialFlat.developer = residentialFlatData.developer;
  residentialFlat.ownership = residentialFlatData.ownership;
  residentialFlat.additionalRooms = residentialFlatData.additionalRooms;
  residentialFlat.amenities = residentialFlatData.amenities;

  return await residentialFlat.save();
};

// Get all Flats
const getAllResidentialFlats = async () => {
  return await ResidentialFlat.find();
};

// Get Flat by ID
const getResidentialFlatById = async (residentialFlatId) => {
  const residentialFlat = await ResidentialFlat.findById(residentialFlatId);
  if (!residentialFlat) {
    throw new NotFoundError('Residential Flat not found');
  }
  return residentialFlat;
};

// Update Flat by ID
const updateResidentialFlat = async (residentialFlatId, updateData) => {
  const residentialFlat = await ResidentialFlat.findById(residentialFlatId);
  if (!residentialFlat) {
    throw new NotFoundError('Residential Flat not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'numberOfFlatsInSociety', 'city', 'locality', 'projectSocietyName', 'Address',
    'bedrooms', 'balconies', 'floorNumber', 'totalFloor', 'furnished', 'bathrooms',
    'superArea', 'carpetArea', 'areaUnit', 'possessionStatus', 'availableFromMonth',
    'availableFromYear', 'constructionAge', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'transactionType', 'overlooking', 'facing', 'residentialFlatType',
    'flooring', 'developer', 'ownership', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      residentialFlat[field] = updateData[field];
    }
  });

  return await residentialFlat.save();
};

// Delete Flat by ID
const deleteResidentialFlat = async (residentialFlatId) => {
  const residentialFlat = await ResidentialFlat.findByIdAndDelete(residentialFlatId);
  if (!residentialFlat) {
    throw new NotFoundError('Residential Flat not found');
  }
  return residentialFlat;
};

module.exports = {
  createResidentialFlat,
  getAllResidentialFlats,
  getResidentialFlatById,
  updateResidentialFlat,
  deleteResidentialFlat,
};
