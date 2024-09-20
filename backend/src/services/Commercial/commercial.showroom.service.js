const CommercialShowroom = require('../../models/commercial.showroom.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Commercial Showroom
const createCommercialShowroom = async (showroomData) => {
  const commercialShowroom = new CommercialShowroom();

  // Assigning data to commercial showroom fields
  commercialShowroom.city = showroomData.city;
  commercialShowroom.locality = showroomData.locality;
  commercialShowroom.projectMarketName = showroomData.projectMarketName;
  commercialShowroom.Address = showroomData.Address;
  commercialShowroom.landZone = showroomData.landZone;
  commercialShowroom.nearbyBusinesses = showroomData.nearbyBusinesses;
  commercialShowroom.floorNumber = showroomData.floorNumber;
  commercialShowroom.totalFloor = showroomData.totalFloor;
  commercialShowroom.furnished = showroomData.furnished;
  commercialShowroom.washrooms = showroomData.washrooms;
  commercialShowroom.cornerShowroom = showroomData.cornerShowroom;
  commercialShowroom.mainRoadFacing = showroomData.mainRoadFacing;
  commercialShowroom.personalWashroom = showroomData.personalWashroom;
  commercialShowroom.pantryCafeteria = showroomData.pantryCafeteria;
  commercialShowroom.coveredArea = showroomData.coveredArea;
  commercialShowroom.plotArea = showroomData.plotArea;
  commercialShowroom.carpetArea = showroomData.carpetArea;
  commercialShowroom.areaUnit = showroomData.areaUnit;
  commercialShowroom.entranceWidth = showroomData.entranceWidth;
  commercialShowroom.widthEntranceUnit = showroomData.widthEntranceUnit;
  commercialShowroom.possessionStatus = showroomData.possessionStatus;
  commercialShowroom.availableFromMonth = showroomData.availableFromMonth;
  commercialShowroom.availableFromYear = showroomData.availableFromYear;
  commercialShowroom.constructionAge = showroomData.constructionAge;
  commercialShowroom.currentlyLeasedOut = showroomData.currentlyLeasedOut;
  commercialShowroom.assuredReturns = showroomData.assuredReturns;
  commercialShowroom.rateOfReturn = showroomData.rateOfReturn;
  commercialShowroom.expectedPrice = showroomData.expectedPrice;
  commercialShowroom.bookingAmount = showroomData.bookingAmount;
  commercialShowroom.priceNegotiable = showroomData.priceNegotiable;
  commercialShowroom.subPropertyType = showroomData.subPropertyType;
  commercialShowroom.ownership = showroomData.ownership;
  commercialShowroom.floors = showroomData.floors;
  commercialShowroom.unitsPerFloor = showroomData.unitsPerFloor;
  commercialShowroom.transactionType = showroomData.transactionType;
  commercialShowroom.overlooking = showroomData.overlooking;
  commercialShowroom.status = showroomData.status;
  commercialShowroom.facing = showroomData.facing;
  commercialShowroom.propertyAge = showroomData.propertyAge;
  commercialShowroom.additionalRooms = showroomData.additionalRooms;
  commercialShowroom.amenities = showroomData.amenities;

  return await commercialShowroom.save();
};

// Get all Commercial Showrooms
const getAllCommercialShowrooms = async () => {
  return await CommercialShowroom.find();
};

// Get Commercial Showroom by ID
const getCommercialShowroomById = async (showroomId) => {
  const commercialShowroom = await CommercialShowroom.findById(showroomId);
  if (!commercialShowroom) {
    throw new NotFoundError('Commercial showroom not found');
  }
  return commercialShowroom;
};

// Update Commercial Showroom by ID
const updateCommercialShowroom = async (showroomId, updateData) => {
  const commercialShowroom = await CommercialShowroom.findById(showroomId);
  if (!commercialShowroom) {
    throw new NotFoundError('Commercial showroom not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectMarketName', 'Address', 'landZone', 'nearbyBusinesses', 'floorNumber',
    'totalFloor', 'furnished', 'washrooms', 'cornerShowroom', 'mainRoadFacing', 'personalWashroom', 'pantryCafeteria',
    'coveredArea', 'plotArea', 'carpetArea', 'areaUnit', 'entranceWidth', 'widthEntranceUnit',
    'possessionStatus', 'availableFromMonth', 'availableFromYear', 'constructionAge',
    'currentlyLeasedOut', 'assuredReturns', 'rateOfReturn', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'subPropertyType', 'ownership', 'floors', 'unitsPerFloor', 'transactionType',
    'overlooking', 'status', 'facing', 'propertyAge', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      commercialShowroom[field] = updateData[field];
    }
  });

  return await commercialShowroom.save();
};

// Delete Commercial Showroom by ID
const deleteCommercialShowroom = async (showroomId) => {
  const commercialShowroom = await CommercialShowroom.findByIdAndDelete(showroomId);
  if (!commercialShowroom) {
    throw new NotFoundError('Commercial showroom not found');
  }
  return commercialShowroom;
};

module.exports = {
  createCommercialShowroom,
  getAllCommercialShowrooms,
  getCommercialShowroomById,
  updateCommercialShowroom,
  deleteCommercialShowroom,
};
