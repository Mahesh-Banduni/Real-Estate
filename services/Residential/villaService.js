const Villa = require('../../models/Villa'); // Assuming Villa model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Villa
const createVilla = async (villaData) => {
  const villa = new Villa();

  // Assigning data to villa fields
  villa.city = villaData.city;
  villa.locality = villaData.locality;
  villa.projectSocietyName = villaData.projectSocietyName;
  villa.Address = villaData.Address;
  villa.bedrooms = villaData.bedrooms;
  villa.balconies = villaData.balconies;
  villa.floorNumber = villaData.floorNumber;
  villa.totalFloor = villaData.totalFloor;
  villa.furnished = villaData.furnished;
  villa.bathrooms = villaData.bathrooms;
  villa.openSides = villaData.openSides;
  villa.facingRoadWidth = villaData.facingRoadWidth;
  villa.plotArea = villaData.plotArea;
  villa.plotAreaUnit = villaData.plotAreaUnit;
  villa.lengthdimension = villaData.lengthdimension;
  villa.widthdimension = villaData.widthdimension;
  villa.carpetArea = villaData.carpetArea;
  villa.superArea = villaData.superArea;
  villa.csAreaUnit = villaData.csAreaUnit;
  villa.cornerPlot = villaData.cornerPlot;
  villa.possessionStatus = villaData.possessionStatus;
  villa.availableFromMonth = villaData.availableFromMonth;
  villa.availableFromYear = villaData.availableFromYear;
  villa.constructionAge = villaData.constructionAge;
  villa.expectedPrice = villaData.expectedPrice;
  villa.bookingAmount = villaData.bookingAmount;
  villa.priceNegotiable = villaData.priceNegotiable;
  villa.villaType = villaData.villaType;
  villa.ownership = villaData.ownership;
  villa.flooring = villaData.flooring;
  villa.transactionType = villaData.transactionType;
  villa.overlooking = villaData.overlooking;
  villa.facing = villaData.facing;
  villa.additionalRooms = villaData.additionalRooms;
  villa.amenities = villaData.amenities;

  return await villa.save();
};

// Get all Villas
const getAllVillas = async () => {
  return await Villa.find();
};

// Get Villa by ID
const getVillaById = async (villaId) => {
  const villa = await Villa.findById(villaId);
  if (!villa) {
    throw new NotFoundError('Villa not found');
  }
  return villa;
};

// Update Villa by ID
const updateVilla = async (villaId, updateData) => {
  const villa = await Villa.findById(villaId);
  if (!villa) {
    throw new NotFoundError('Villa not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'bedrooms', 'balconies', 'floorNumber',
    'totalFloor', 'furnished', 'bathrooms', 'openSides', 'facingRoadWidth', 'plotArea', 
    'plotAreaUnit', 'lengthdimension', 'widthdimension', 'carpetArea', 'superArea', 'CSreaUnit', 
    'cornerPlot', 'possessionStatus', 'availableFromMonth', 'availableFromYear', 'constructionAge', 
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'villaType', 'ownership', 'flooring', 
    'transactionType', 'overlooking', 'facing', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      villa[field] = updateData[field];
    }
  });

  return await villa.save();
};

// Delete Villa by ID
const deleteVilla = async (villaId) => {
  const villa = await Villa.findByIdAndDelete(villaId);
  if (!villa) {
    throw new NotFoundError('Villa not found');
  }
  return villa;
};

module.exports = {
  createVilla,
  getAllVillas,
  getVillaById,
  updateVilla,
  deleteVilla,
};
