const BuilderFloorApartment = require('../../models/BuilderFloorApartment'); // Assuming BuilderFloorApartment model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new BuilderFloorApartment
const createBuilderFloorApartment = async (apartmentData) => {
  const builderFloorApartment = new BuilderFloorApartment();

  // Assigning data to builder floor apartment fields
  builderFloorApartment.city = apartmentData.city;
  builderFloorApartment.locality = apartmentData.locality;
  builderFloorApartment.projectSocietyName = apartmentData.projectSocietyName;
  builderFloorApartment.Address = apartmentData.Address;
  builderFloorApartment.bedrooms = apartmentData.bedrooms;
  builderFloorApartment.balconies = apartmentData.balconies;
  builderFloorApartment.floorNumber = apartmentData.floorNumber;
  builderFloorApartment.totalFloor = apartmentData.totalFloor;
  builderFloorApartment.furnished = apartmentData.furnished;
  builderFloorApartment.bathrooms = apartmentData.bathrooms;
  builderFloorApartment.superArea = apartmentData.superArea;
  builderFloorApartment.carpetArea = apartmentData.carpetArea;
  builderFloorApartment.areaUnit = apartmentData.areaUnit;
  builderFloorApartment.possessionStatus = apartmentData.possessionStatus;
  builderFloorApartment.availableFromMonth = apartmentData.availableFromMonth;
  builderFloorApartment.availableFromYear = apartmentData.availableFromYear;
  builderFloorApartment.constructionAge = apartmentData.constructionAge;
  builderFloorApartment.expectedPrice = apartmentData.expectedPrice;
  builderFloorApartment.bookingAmount = apartmentData.bookingAmount;
  builderFloorApartment.priceNegotiable = apartmentData.priceNegotiable;
  builderFloorApartment.transactionType = apartmentData.transactionType;
  builderFloorApartment.flatType = apartmentData.flatType;
  builderFloorApartment.subPropertyType = apartmentData.subPropertyType;
  builderFloorApartment.developer = apartmentData.developer;
  builderFloorApartment.ownership = apartmentData.ownership;
  builderFloorApartment.additionalRooms = apartmentData.additionalRooms;
  builderFloorApartment.amenities = apartmentData.amenities;

  return await builderFloorApartment.save();
};

// Get all Builder Floor Apartments
const getAllBuilderFloorApartments = async () => {
  return await BuilderFloorApartment.find();
};

// Get Builder Floor Apartment by ID
const getBuilderFloorApartmentById = async (apartmentId) => {
  const builderFloorApartment = await BuilderFloorApartment.findById(apartmentId);
  if (!builderFloorApartment) {
    throw new NotFoundError('Builder floor apartment not found');
  }
  return builderFloorApartment;
};

// Update Builder Floor Apartment by ID
const updateBuilderFloorApartment = async (apartmentId, updateData) => {
  const builderFloorApartment = await BuilderFloorApartment.findById(apartmentId);
  if (!builderFloorApartment) {
    throw new NotFoundError('Builder floor apartment not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms', 'balconies', 'floorNumber',
    'totalFloor', 'furnished', 'bathrooms', 'superArea', 'carpetArea', 'areaUnit', 'possessionStatus',
    'availableFromMonth', 'availableFromYear', 'constructionAge', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'transactionType', 'flatType', 'subPropertyType', 'developer', 'ownership',
    'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      builderFloorApartment[field] = updateData[field];
    }
  });

  return await builderFloorApartment.save();
};

// Delete Builder Floor Apartment by ID
const deleteBuilderFloorApartment = async (apartmentId) => {
  const builderFloorApartment = await BuilderFloorApartment.findByIdAndDelete(apartmentId);
  if (!builderFloorApartment) {
    throw new NotFoundError('Builder floor apartment not found');
  }
  return builderFloorApartment;
};

module.exports = {
  createBuilderFloorApartment,
  getAllBuilderFloorApartments,
  getBuilderFloorApartmentById,
  updateBuilderFloorApartment,
  deleteBuilderFloorApartment,
};
