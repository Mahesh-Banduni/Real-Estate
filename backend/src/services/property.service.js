const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors');
const Property = require('../models/property.model.js');
const User = require('../models/user.model.js');

// Create a new Property
const createProperty = async (propertyData) => {
  const property = new Property();

  // Assigning data to property fields
  property.title = propertyData.title;
  property.description = propertyData.description;
  property.propertyPurpose = propertyData.propertyPurpose;
  property.propertyType = propertyData.propertyType;
  property.images = propertyData.images;
  property.user = propertyData.user;
  property.numberOfFlatsInSociety = propertyData.numberOfFlatsInSociety;
  property.city = propertyData.city;
  property.locality = propertyData.locality;
  property.developer = propertyData.developer;
  property.projectSocietyName = propertyData.projectSocietyName;
  property.Address = propertyData.Address;
  property.buildingComplexName = propertyData.buildingComplexName;
  property.landZone = propertyData.landZone;
  property.fromCity = propertyData.fromCity;
  property.toCity = propertyData.toCity;
  property.idealForBusinesses = propertyData.idealForBusinesses;
  property.nearbyBusinesses = propertyData.nearbyBusinesses;
  property.floorsAllowed = propertyData.floorsAllowed;
  property.openSides = propertyData.openSides;
  property.facingRoadWidth = propertyData.facingRoadWidth;
  property.boundaryWall = propertyData.boundaryWall;
  property.gatedColony = propertyData.gatedColony;
  property.bedrooms = propertyData.bedrooms;
  property.balconies = propertyData.balconies;
  property.bathrooms = propertyData.bathrooms;
  property.floorNumber = propertyData.floorNumber;
  property.totalFloor = propertyData.totalFloor;
  property.furnished = propertyData.furnished;
  property.personalWashroom = propertyData.personalWashroom;
  property.pantryCafeteria = propertyData.pantryCafeteria;
  property.cornerShop = propertyData.cornerShop;
  property.mainRoadFacing = propertyData.mainRoadFacing;
  property.anyConstructionDone = propertyData.anyConstructionDone;
  property.BHKType = propertyData.BHKType;
  property.flooring = propertyData.flooring;
  property.plotArea = propertyData.plotArea;
  property.plotAreaUnit = propertyData.plotAreaUnit;
  property.lengthdimension = propertyData.lengthdimension;
  property.widthdimension = propertyData.widthdimension;
  property.cornerPlot = propertyData.cornerPlot;
  property.coveredArea = propertyData.coveredArea;
  property.carpetArea = propertyData.carpetArea;
  property.superArea = propertyData.superArea;
  property.carpetAreaUnit = propertyData.carpetAreaUnit;
  property.superAreaUnit = propertyData.superAreaUnit;
  property.entranceWidth = propertyData.entranceWidth;
  property.entranceWidthUnit = propertyData.entranceWidthUnit;
  property.ownership = propertyData.ownership;
  property.transactionType = propertyData.transactionType;
  property.possessionStatus = propertyData.possessionStatus;
  property.currentlyLeasedOut = propertyData.currentlyLeasedOut;
  property.expectedPrice = propertyData.expectedPrice;
  property.bookingAmount = propertyData.bookingAmount;
  property.priceNegotiable = propertyData.priceNegotiable;
  property.taxAndGovtChargesExcluded = propertyData.taxAndGovtChargesExcluded;
  property.allInclusivePrice = propertyData.allInclusivePrice;
  property.additionalRooms = propertyData.additionalRooms;
  property.residentialAmenities = propertyData.residentialAmenities;
  property.commercialAmenities = propertyData.commercialAmenities;
  property.landAmenities = propertyData.landAmenities;
  property.locationAdvantages = propertyData.locationAdvantages;
  property.overlooking = propertyData.overlooking;
  property.facing = propertyData.facing;

  return await property.save();
};

const searchProperty = async (propertyPurpose, filters) => {
  const query = { propertyPurpose: propertyPurpose };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;

  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  const filteredProperties = await Property.find(query).populate('user');
  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

// Get Property by ID
const getPropertyById = async (propertyId) => {
  const property = await Property.findById(propertyId).populate('user');
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  return property;
};

// Update Property by ID
const updateProperty = async (propertyId, updateData) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'title', 'description', 'propertyType', 'images', 'numberOfFlatsInSociety', 'city', 'locality',
    'developer', 'projectSocietyName', 'Address', 'buildingComplexName', 'landZone', 'fromCity', 'toCity',
    'idealForBusinesses', 'nearbyBusinesses', 'floorsAllowed', 'openSides', 'facingRoadWidth', 'boundaryWall',
    'gatedColony', 'bedrooms', 'balconies', 'bathrooms', 'floorNumber', 'totalFloor', 'furnished',
    'personalWashroom', 'pantryCafeteria', 'cornerShop', 'mainRoadFacing', 'anyConstructionDone', 'BHKType',
    'flooring', 'plotArea', 'plotAreaUnit', 'lengthdimension', 'widthdimension', 'cornerPlot', 'coveredArea',
    'carpetArea', 'superArea', 'carpetAreaUnit', 'superAreaUnit', 'entranceWidth', 'entranceWidthUnit',
    'ownership', 'transactionType', 'possessionStatus', 'currentlyLeasedOut', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'taxAndGovtChargesExcluded', 'allInclusivePrice', 'additionalRooms', 'residentialAmenities',
    'commercialAmenities', 'landAmenities', 'locationAdvantages', 'overlooking', 'facing',
  ];

  allowedUpdates.forEach((field) => {
    if (updateData[field] !== undefined) {
      property[field] = updateData[field];
    }
  });

  return await property.save();
};

// Delete Property by ID
const deleteProperty = async (propertyId) => {
  const property = await Property.findByIdAndDelete(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  return property;
};

// Mark Property by Admin
const markHandpickedProperty = async (propertyId, userId) => {
  const user = await User.findById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can mark properties as handpicked.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isHandpicked = true;
  return await property.save();
};

// Unmark Property by Admin
const unmarkHandpickedProperty = async (propertyId, userId) => {
  const user = await User.findById(userId);
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can unmark properties as handpicked.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isHandpicked = false;
  return await property.save();
};

module.exports = {
  createProperty,
  searchProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  markHandpickedProperty,
  unmarkHandpickedProperty
};
