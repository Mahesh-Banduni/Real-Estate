const Penthouse = require('../../models/Penthouse'); // Assuming Penthouse model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Penthouse
const createPenthouse = async (penthouseData) => {
  const penthouse = new Penthouse();

  // Assigning data to penthouse fields
  penthouse.city = penthouseData.city;
  penthouse.locality = penthouseData.locality;
  penthouse.projectSocietyName = penthouseData.projectSocietyName;
  penthouse.Address = penthouseData.Address;
  penthouse.bedrooms = penthouseData.bedrooms;
  penthouse.balconies = penthouseData.balconies;
  penthouse.floorNumber = penthouseData.floorNumber;
  penthouse.totalFloor = penthouseData.totalFloor;
  penthouse.furnished = penthouseData.furnished;
  penthouse.bathrooms = penthouseData.bathrooms;
  penthouse.superArea = penthouseData.superArea;
  penthouse.carpetArea = penthouseData.carpetArea;
  penthouse.areaUnit = penthouseData.areaUnit;
  penthouse.possessionStatus = penthouseData.possessionStatus;
  penthouse.availableFromMonth = penthouseData.availableFromMonth;
  penthouse.availableFromYear = penthouseData.availableFromYear;
  penthouse.constructionAge = penthouseData.constructionAge;
  penthouse.expectedPrice = penthouseData.expectedPrice;
  penthouse.bookingAmount = penthouseData.bookingAmount;
  penthouse.priceNegotiable = penthouseData.priceNegotiable;
  penthouse.transactionType = penthouseData.transactionType;
  penthouse.flatType = penthouseData.flatType;
  penthouse.subPropertyType = penthouseData.subPropertyType;
  penthouse.developer = penthouseData.developer;
  penthouse.ownership = penthouseData.ownership;
  penthouse.additionalRooms = penthouseData.additionalRooms;
  penthouse.amenities = penthouseData.amenities;

  return await penthouse.save();
};

// Get all Penthouses
const getAllPenthouses = async () => {
  return await Penthouse.find();
};

// Get Penthouse by ID
const getPenthouseById = async (penthouseId) => {
  const penthouse = await Penthouse.findById(penthouseId);
  if (!penthouse) {
    throw new NotFoundError('Penthouse not found');
  }
  return penthouse;
};

// Update Penthouse by ID
const updatePenthouse = async (penthouseId, updateData) => {
  const penthouse = await Penthouse.findById(penthouseId);
  if (!penthouse) {
    throw new NotFoundError('Penthouse not found');
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
      penthouse[field] = updateData[field];
    }
  });

  return await penthouse.save();
};

// Delete Penthouse by ID
const deletePenthouse = async (penthouseId) => {
  const penthouse = await Penthouse.findByIdAndDelete(penthouseId);
  if (!penthouse) {
    throw new NotFoundError('Penthouse not found');
  }
  return penthouse;
};

module.exports = {
  createPenthouse,
  getAllPenthouses,
  getPenthouseById,
  updatePenthouse,
  deletePenthouse,
};
