const StudioApartment = require('../../models/studio.apartment.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Studio Apartment
const createStudioApartment = async (studioApartmentData) => {
  const studioApartment = new StudioApartment();

  // Assigning data to studioApartment fields
  studioApartment.city = studioApartmentData.city;
  studioApartment.locality = studioApartmentData.locality;
  studioApartment.projectSocietyName = studioApartmentData.projectSocietyName;
  studioApartment.Address = studioApartmentData.Address;
  studioApartment.bedrooms = studioApartmentData.bedrooms;
  studioApartment.balconies = studioApartmentData.balconies;
  studioApartment.floorNumber = studioApartmentData.floorNumber;
  studioApartment.totalFloor = studioApartmentData.totalFloor;
  studioApartment.furnished = studioApartmentData.furnished;
  studioApartment.bathrooms = studioApartmentData.bathrooms;
  studioApartment.plotArea = studioApartmentData.plotArea;
  studioApartment.superArea = studioApartmentData.superArea;
  studioApartment.carpetArea = studioApartmentData.carpetArea;
  studioApartment.areaUnit = studioApartmentData.areaUnit;
  studioApartment.possessionStatus = studioApartmentData.possessionStatus;
  studioApartment.availableFromMonth = studioApartmentData.availableFromMonth;
  studioApartment.availableFromYear = studioApartmentData.availableFromYear;
  studioApartment.constructionAge = studioApartmentData.constructionAge;
  studioApartment.expectedPrice = studioApartmentData.expectedPrice;
  studioApartment.bookingAmount = studioApartmentData.bookingAmount;
  studioApartment.priceNegotiable = studioApartmentData.priceNegotiable;
  studioApartment.transactionType = studioApartmentData.transactionType;
  studioApartment.flatType = studioApartmentData.flatType;
  studioApartment.subPropertyType = studioApartmentData.subPropertyType;
  studioApartment.developer = studioApartmentData.developer;
  studioApartment.ownership = studioApartmentData.ownership;
  studioApartment.additionalRooms = studioApartmentData.additionalRooms;
  studioApartment.amenities = studioApartmentData.amenities;

  return await studioApartment.save();
};

// Get all Studio Apartments
const getAllStudioApartments = async () => {
  return await StudioApartment.find();
};

// Get Studio Apartment by ID
const getStudioApartmentById = async (studioApartmentId) => {
  const studioApartment = await StudioApartment.findById(studioApartmentId);
  if (!studioApartment) {
    throw new NotFoundError('Studio Apartment not found');
  }
  return studioApartment;
};

// Update Studio Apartment by ID
const updateStudioApartment = async (studioApartmentId, updateData) => {
  const studioApartment = await StudioApartment.findById(studioApartmentId);
  if (!studioApartment) {
    throw new NotFoundError('Studio Apartment not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms', 'balconies', 'floorNumber',
    'totalFloor', 'furnished', 'bathrooms', 'plotArea', 'superArea', 'carpetArea', 'areaUnit',
    'possessionStatus', 'availableFromMonth', 'availableFromYear', 'constructionAge', 'expectedPrice',
    'bookingAmount', 'priceNegotiable', 'transactionType', 'flatType', 'subPropertyType', 'developer',
    'ownership', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      studioApartment[field] = updateData[field];
    }
  });

  return await studioApartment.save();
};

// Delete Studio Apartment by ID
const deleteStudioApartment = async (studioApartmentId) => {
  const studioApartment = await StudioApartment.findByIdAndDelete(studioApartmentId);
  if (!studioApartment) {
    throw new NotFoundError('Studio Apartment not found');
  }
  return studioApartment;
};

module.exports = {
  createStudioApartment,
  getAllStudioApartments,
  getStudioApartmentById,
  updateStudioApartment,
  deleteStudioApartment,
};
