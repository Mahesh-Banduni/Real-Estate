const ITParkSEZOfficeSpace = require('../../models/IT.park.SEZ.office.space.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new OfficeSpace IT Park/SEZ Space
const createITParkSEZOfficeSpace = async (officeSpaceData) => {
  const iTParkSEZOfficeSpace = new ITParkSEZOfficeSpace();

  // Assigning data to office IT park/SEZ fields
  iTParkSEZOfficeSpace.city = officeSpaceData.city;
  iTParkSEZOfficeSpace.locality = officeSpaceData.locality;
  iTParkSEZOfficeSpace.projectMarketName = officeSpaceData.projectMarketName;
  iTParkSEZOfficeSpace.Address = officeSpaceData.Address;
  iTParkSEZOfficeSpace.landZone = officeSpaceData.landZone;
  iTParkSEZOfficeSpace.floorNumber = officeSpaceData.floorNumber;
  iTParkSEZOfficeSpace.totalFloor = officeSpaceData.totalFloor;
  iTParkSEZOfficeSpace.furnished = officeSpaceData.furnished;
  iTParkSEZOfficeSpace.washrooms = officeSpaceData.washrooms;
  iTParkSEZOfficeSpace.personalWashroom = officeSpaceData.personalWashroom;
  iTParkSEZOfficeSpace.pantryCafeteria = officeSpaceData.pantryCafeteria;
  iTParkSEZOfficeSpace.superArea = officeSpaceData.superArea;
  iTParkSEZOfficeSpace.carpetArea = officeSpaceData.carpetArea;
  iTParkSEZOfficeSpace.areaUnit = officeSpaceData.areaUnit;
  iTParkSEZOfficeSpace.possessionStatus = officeSpaceData.possessionStatus;
  iTParkSEZOfficeSpace.availableFromMonth = officeSpaceData.availableFromMonth;
  iTParkSEZOfficeSpace.availableFromYear = officeSpaceData.availableFromYear;
  iTParkSEZOfficeSpace.constructionAge = officeSpaceData.constructionAge;
  iTParkSEZOfficeSpace.currentlyLeasedOut = officeSpaceData.currentlyLeasedOut;
  iTParkSEZOfficeSpace.assuredReturns = officeSpaceData.assuredReturns;
  iTParkSEZOfficeSpace.rateOfReturn = officeSpaceData.rateOfReturn;
  iTParkSEZOfficeSpace.expectedPrice = officeSpaceData.expectedPrice;
  iTParkSEZOfficeSpace.bookingAmount = officeSpaceData.bookingAmount;
  iTParkSEZOfficeSpace.priceNegotiable = officeSpaceData.priceNegotiable;
  iTParkSEZOfficeSpace.subPropertyType = officeSpaceData.subPropertyType;
  iTParkSEZOfficeSpace.ownership = officeSpaceData.ownership;
  iTParkSEZOfficeSpace.floors = officeSpaceData.floors;
  iTParkSEZOfficeSpace.unitsPerFloor = officeSpaceData.unitsPerFloor;
  iTParkSEZOfficeSpace.transactionType = officeSpaceData.transactionType;
  iTParkSEZOfficeSpace.overlooking = officeSpaceData.overlooking;
  iTParkSEZOfficeSpace.status = officeSpaceData.status;
  iTParkSEZOfficeSpace.facing = officeSpaceData.facing;
  iTParkSEZOfficeSpace.propertyAge = officeSpaceData.propertyAge;
  iTParkSEZOfficeSpace.additionalRooms = officeSpaceData.additionalRooms;
  iTParkSEZOfficeSpace.amenities = officeSpaceData.amenities;

  return await iTParkSEZOfficeSpace.save();
};

// Get all OfficeSpace IT Park/SEZ Spaces
const getAllITParkSEZOfficeSpaces = async () => {
  return await ITParkSEZOfficeSpace.find();
};

// Get OfficeSpace IT Park/SEZ Space by ID
const getITParkSEZOfficeSpaceById = async (officeSpaceId) => {
  const iTParkSEZOfficeSpace = await ITParkSEZOfficeSpace.findById(officeSpaceId);
  if (!iTParkSEZOfficeSpace) {
    throw new NotFoundError('OfficeSpace IT Park/SEZ space not found');
  }
  return iTParkSEZOfficeSpace;
};

// Update OfficeSpace IT Park/SEZ Space by ID
const updateITParkSEZOfficeSpace = async (officeSpaceId, updateData) => {
  const iTParkSEZOfficeSpace = await ITParkSEZOfficeSpace.findById(officeSpaceId);
  if (!iTParkSEZOfficeSpace) {
    throw new NotFoundError('OfficeSpace IT Park/SEZ space not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectMarketName', 'Address', 'landZone', 'floorNumber', 'totalFloor', 'furnished',
    'washrooms', 'personalWashroom', 'pantryCafeteria', 'superArea', 'carpetArea', 'areaUnit', 'possessionStatus',
    'availableFromMonth', 'availableFromYear', 'constructionAge', 'currentlyLeasedOut', 'assuredReturns',
    'rateOfReturn', 'expectedPrice', 'bookingAmount', 'priceNegotiable', 'subPropertyType', 'ownership', 'floors',
    'unitsPerFloor', 'transactionType', 'overlooking', 'status', 'facing', 'propertyAge', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      iTParkSEZOfficeSpace[field] = updateData[field];
    }
  });

  return await iTParkSEZOfficeSpace.save();
};

// Delete OfficeSpace IT Park/SEZ Space by ID
const deleteITParkSEZOfficeSpace = async (officeSpaceId) => {
  const iTParkSEZOfficeSpace = await ITParkSEZOfficeSpace.findByIdAndDelete(officeSpaceId);
  if (!iTParkSEZOfficeSpace) {
    throw new NotFoundError('IT Park/SEZ office space not found');
  }
  return iTParkSEZOfficeSpace;
};

module.exports = {
  createITParkSEZOfficeSpace,
  getAllITParkSEZOfficeSpaces,
  getITParkSEZOfficeSpaceById,
  updateITParkSEZOfficeSpace,
  deleteITParkSEZOfficeSpace,
};
