const CommercialOfficeSpace = require('../../models/commercial.office.space.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Commercial Office Space
const createCommercialOfficeSpace = async (officeSpaceData) => {
  const commercialOfficeSpace = new CommercialOfficeSpace();

  // Assigning data to commercial office space fields
  commercialOfficeSpace.city = officeSpaceData.city;
  commercialOfficeSpace.locality = officeSpaceData.locality;
  commercialOfficeSpace.buildingComplexName = officeSpaceData.buildingComplexName;
  commercialOfficeSpace.Address = officeSpaceData.Address;
  commercialOfficeSpace.landZone = officeSpaceData.landZone;
  commercialOfficeSpace.idealForBusinesses = officeSpaceData.idealForBusinesses;
  commercialOfficeSpace.bedrooms = officeSpaceData.bedrooms;
  commercialOfficeSpace.balconies = officeSpaceData.balconies;
  commercialOfficeSpace.floorNumber = officeSpaceData.floorNumber;
  commercialOfficeSpace.totalFloor = officeSpaceData.totalFloor;
  commercialOfficeSpace.furnished = officeSpaceData.furnished;
  commercialOfficeSpace.washrooms = officeSpaceData.washrooms;
  commercialOfficeSpace.personalWashroom = officeSpaceData.personalWashroom;
  commercialOfficeSpace.pantryCafeteria = officeSpaceData.pantryCafeteria;
  commercialOfficeSpace.superArea = officeSpaceData.superArea;
  commercialOfficeSpace.carpetArea = officeSpaceData.carpetArea;
  commercialOfficeSpace.areaUnit = officeSpaceData.areaUnit;
  commercialOfficeSpace.possessionStatus = officeSpaceData.possessionStatus;
  commercialOfficeSpace.availableFromMonth = officeSpaceData.availableFromMonth;
  commercialOfficeSpace.availableFromYear = officeSpaceData.availableFromYear;
  commercialOfficeSpace.constructionAge = officeSpaceData.constructionAge;
  commercialOfficeSpace.currentlyLeasedOut = officeSpaceData.currentlyLeasedOut;
  commercialOfficeSpace.assuredReturns = officeSpaceData.assuredReturns;
  commercialOfficeSpace.rateOfReturn = officeSpaceData.rateOfReturn;
  commercialOfficeSpace.expectedPrice = officeSpaceData.expectedPrice;
  commercialOfficeSpace.bookingAmount = officeSpaceData.bookingAmount;
  commercialOfficeSpace.priceNegotiable = officeSpaceData.priceNegotiable;
  commercialOfficeSpace.subPropertyType = officeSpaceData.subPropertyType;
  commercialOfficeSpace.ownership = officeSpaceData.ownership;
  commercialOfficeSpace.floors = officeSpaceData.floors;
  commercialOfficeSpace.unitsPerFloor = officeSpaceData.unitsPerFloor;
  commercialOfficeSpace.transactionType = officeSpaceData.transactionType;
  commercialOfficeSpace.overlooking = officeSpaceData.overlooking;
  commercialOfficeSpace.status = officeSpaceData.status;
  commercialOfficeSpace.facing = officeSpaceData.facing;
  commercialOfficeSpace.propertyAge = officeSpaceData.propertyAge;
  commercialOfficeSpace.additionalRooms = officeSpaceData.additionalRooms;
  commercialOfficeSpace.amenities = officeSpaceData.amenities;

  return await commercialOfficeSpace.save();
};

// Get all Commercial Office Spaces
const getAllCommercialOfficeSpaces = async () => {
  return await CommercialOfficeSpace.find();
};

// Get Commercial Office Space by ID
const getCommercialOfficeSpaceById = async (officeSpaceId) => {
  const commercialOfficeSpace = await CommercialOfficeSpace.findById(officeSpaceId);
  if (!commercialOfficeSpace) {
    throw new NotFoundError('Commercial office space not found');
  }
  return commercialOfficeSpace;
};

// Update Commercial Office Space by ID
const updateCommercialOfficeSpace = async (officeSpaceId, updateData) => {
  const commercialOfficeSpace = await CommercialOfficeSpace.findById(officeSpaceId);
  if (!commercialOfficeSpace) {
    throw new NotFoundError('Commercial office space not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'buildingComplexName', 'Address', 'landZone', 'idealForBusinesses', 'bedrooms',
    'balconies', 'floorNumber', 'totalFloor', 'furnished', 'washrooms', 'personalWashroom',
    'pantryCafeteria', 'superArea', 'carpetArea', 'areaUnit', 'possessionStatus', 'availableFromMonth',
    'availableFromYear', 'constructionAge', 'currentlyLeasedOut', 'assuredReturns', 'rateOfReturn',
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'subPropertyType', 'ownership', 'floors',
    'unitsPerFloor', 'transactionType', 'overlooking', 'status', 'facing', 'propertyAge', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      commercialOfficeSpace[field] = updateData[field];
    }
  });

  return await commercialOfficeSpace.save();
};

// Delete Commercial Office Space by ID
const deleteCommercialOfficeSpace = async (officeSpaceId) => {
  const commercialOfficeSpace = await CommercialOfficeSpace.findByIdAndDelete(officeSpaceId);
  if (!commercialOfficeSpace) {
    throw new NotFoundError('Commercial office space not found');
  }
  return commercialOfficeSpace;
};

module.exports = {
  createCommercialOfficeSpace,
  getAllCommercialOfficeSpaces,
  getCommercialOfficeSpaceById,
  updateCommercialOfficeSpace,
  deleteCommercialOfficeSpace,
};
