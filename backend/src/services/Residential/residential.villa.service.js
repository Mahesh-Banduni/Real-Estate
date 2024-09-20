const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');
const ResidentialVilla = require('../../models/residential.villa.model');

// Create a new Villa
const createResidentialVilla = async (residentialVillaData) => {
  const residentialVilla = new ResidentialVilla();

  // Assigning data to residentialVilla fields
  residentialVilla.city = residentialVillaData.city;
  residentialVilla.locality = residentialVillaData.locality;
  residentialVilla.projectSocietyName = residentialVillaData.projectSocietyName;
  residentialVilla.Address = residentialVillaData.Address;
  residentialVilla.bedrooms = residentialVillaData.bedrooms;
  residentialVilla.balconies = residentialVillaData.balconies;
  residentialVilla.floorNumber = residentialVillaData.floorNumber;
  residentialVilla.totalFloor = residentialVillaData.totalFloor;
  residentialVilla.furnished = residentialVillaData.furnished;
  residentialVilla.bathrooms = residentialVillaData.bathrooms;
  residentialVilla.openSides = residentialVillaData.openSides;
  residentialVilla.facingRoadWidth = residentialVillaData.facingRoadWidth;
  residentialVilla.plotArea = residentialVillaData.plotArea;
  residentialVilla.plotAreaUnit = residentialVillaData.plotAreaUnit;
  residentialVilla.lengthdimension = residentialVillaData.lengthdimension;
  residentialVilla.widthdimension = residentialVillaData.widthdimension;
  residentialVilla.carpetArea = residentialVillaData.carpetArea;
  residentialVilla.superArea = residentialVillaData.superArea;
  residentialVilla.csAreaUnit = residentialVillaData.csAreaUnit;
  residentialVilla.cornerPlot = residentialVillaData.cornerPlot;
  residentialVilla.possessionStatus = residentialVillaData.possessionStatus;
  residentialVilla.availableFromMonth = residentialVillaData.availableFromMonth;
  residentialVilla.availableFromYear = residentialVillaData.availableFromYear;
  residentialVilla.constructionAge = residentialVillaData.constructionAge;
  residentialVilla.expectedPrice = residentialVillaData.expectedPrice;
  residentialVilla.bookingAmount = residentialVillaData.bookingAmount;
  residentialVilla.priceNegotiable = residentialVillaData.priceNegotiable;
  residentialVilla.residentialVillaType = residentialVillaData.residentialVillaType;
  residentialVilla.ownership = residentialVillaData.ownership;
  residentialVilla.flooring = residentialVillaData.flooring;
  residentialVilla.transactionType = residentialVillaData.transactionType;
  residentialVilla.overlooking = residentialVillaData.overlooking;
  residentialVilla.facing = residentialVillaData.facing;
  residentialVilla.additionalRooms = residentialVillaData.additionalRooms;
  residentialVilla.amenities = residentialVillaData.amenities;

  return await residentialVilla.save();
};

// Get all Villas
const getAllResidentialVillas = async () => {
  return await ResidentialVilla.find();
};

// Get Villa by ID
const getResidentialVillaById = async (residentialVillaId) => {
  const residentialVilla = await ResidentialVilla.findById(residentialVillaId);
  if (!residentialVilla) {
    throw new NotFoundError('Residential Villa not found');
  }
  return residentialVilla;
};

// Update Villa by ID
const updateResidentialVilla = async (residentialVillaId, updateData) => {
  const residentialVilla = await ResidentialVillaVilla.findById(residentialVillaId);
  if (!residentialVilla) {
    throw new NotFoundError('Residential Villa not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms', 'balconies', 'floorNumber',
    'totalFloor', 'furnished', 'bathrooms', 'openSides', 'facingRoadWidth', 'plotArea', 
    'plotAreaUnit', 'lengthdimension', 'widthdimension', 'carpetArea', 'superArea', 'CSreaUnit', 
    'cornerPlot', 'possessionStatus', 'availableFromMonth', 'availableFromYear', 'constructionAge', 
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'residentialVillaType', 'ownership', 'flooring', 
    'transactionType', 'overlooking', 'facing', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      residentialVilla[field] = updateData[field];
    }
  });

  return await residentialVilla.save();
};

// Delete Villa by ID
const deleteResidentialVilla = async (residentialVillaId) => {
  const residentialVilla = await ResidentialVilla.findByIdAndDelete(residentialVillaId);
  if (!residentialVilla) {
    throw new NotFoundError('Residential Villa not found');
  }
  return residentialVilla;
};

module.exports = {
  createResidentialVilla,
  getAllResidentialVillas,
  getResidentialVillaById,
  updateResidentialVilla,
  deleteResidentialVilla,
};
