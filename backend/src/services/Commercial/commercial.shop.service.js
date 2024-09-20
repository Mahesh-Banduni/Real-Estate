const CommercialShop = require('../../models/commercial.shop.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Commercial Shop
const createCommercialShop = async (shopData) => {
  const commercialShop = new CommercialShop();

  // Assigning data to commercial shop fields
  commercialShop.city = shopData.city;
  commercialShop.locality = shopData.locality;
  commercialShop.projectMarketName = shopData.projectMarketName;
  commercialShop.Address = shopData.Address;
  commercialShop.landZone = shopData.landZone;
  commercialShop.nearbyBusinesses = shopData.nearbyBusinesses;
  commercialShop.floorNumber = shopData.floorNumber;
  commercialShop.totalFloor = shopData.totalFloor;
  commercialShop.furnished = shopData.furnished;
  commercialShop.cornerShop = shopData.cornerShop;
  commercialShop.mainRoadFacing = shopData.mainRoadFacing;
  commercialShop.personalWashroom = shopData.personalWashroom;
  commercialShop.pantryCafeteria = shopData.pantryCafeteria;
  commercialShop.coveredArea = shopData.coveredArea;
  commercialShop.plotArea = shopData.plotArea;
  commercialShop.carpetArea = shopData.carpetArea;
  commercialShop.areaUnit = shopData.areaUnit;
  commercialShop.entranceWidth = shopData.entranceWidth;
  commercialShop.widthEntranceUnit = shopData.widthEntranceUnit;
  commercialShop.possessionStatus = shopData.possessionStatus;
  commercialShop.availableFromMonth = shopData.availableFromMonth;
  commercialShop.availableFromYear = shopData.availableFromYear;
  commercialShop.constructionAge = shopData.constructionAge;
  commercialShop.currentlyLeasedOut = shopData.currentlyLeasedOut;
  commercialShop.assuredReturns = shopData.assuredReturns;
  commercialShop.rateOfReturn = shopData.rateOfReturn;
  commercialShop.expectedPrice = shopData.expectedPrice;
  commercialShop.bookingAmount = shopData.bookingAmount;
  commercialShop.priceNegotiable = shopData.priceNegotiable;
  commercialShop.subPropertyType = shopData.subPropertyType;
  commercialShop.ownership = shopData.ownership;
  commercialShop.floors = shopData.floors;
  commercialShop.unitsPerFloor = shopData.unitsPerFloor;
  commercialShop.transactionType = shopData.transactionType;
  commercialShop.overlooking = shopData.overlooking;
  commercialShop.status = shopData.status;
  commercialShop.facing = shopData.facing;
  commercialShop.propertyAge = shopData.propertyAge;
  commercialShop.additionalRooms = shopData.additionalRooms;
  commercialShop.amenities = shopData.amenities;

  return await commercialShop.save();
};

// Get all Commercial Shops
const getAllCommercialShops = async () => {
  return await CommercialShop.find();
};

// Get Commercial Shop by ID
const getCommercialShopById = async (shopId) => {
  const commercialShop = await CommercialShop.findById(shopId);
  if (!commercialShop) {
    throw new NotFoundError('Commercial shop not found');
  }
  return commercialShop;
};

// Update Commercial Shop by ID
const updateCommercialShop = async (shopId, updateData) => {
  const commercialShop = await CommercialShop.findById(shopId);
  if (!commercialShop) {
    throw new NotFoundError('Commercial shop not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectMarketName', 'Address', 'landZone', 'nearbyBusinesses', 'floorNumber', 
    'totalFloor', 'furnished', 'cornerShop', 'mainRoadFacing', 'personalWashroom', 'pantryCafeteria', 
    'coveredArea', 'plotArea', 'carpetArea', 'areaUnit', 'entranceWidth', 'widthEntranceUnit', 
    'possessionStatus', 'availableFromMonth', 'availableFromYear', 'constructionAge', 
    'currentlyLeasedOut', 'assuredReturns', 'rateOfReturn', 'expectedPrice', 'bookingAmount', 
    'priceNegotiable', 'subPropertyType', 'ownership', 'floors', 'unitsPerFloor', 'transactionType', 
    'overlooking', 'status', 'facing', 'propertyAge', 'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      commercialShop[field] = updateData[field];
    }
  });

  return await commercialShop.save();
};

// Delete Commercial Shop by ID
const deleteCommercialShop = async (shopId) => {
  const commercialShop = await CommercialShop.findByIdAndDelete(shopId);
  if (!commercialShop) {
    throw new NotFoundError('Commercial shop not found');
  }
  return commercialShop;
};

module.exports = {
  createCommercialShop,
  getAllCommercialShops,
  getCommercialShopById,
  updateCommercialShop,
  deleteCommercialShop,
};
