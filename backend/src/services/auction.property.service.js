const AuctionProperty = require('../models/auction.property.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const {uploadImages, uploadImage} = require('../utils/upload.image.service.js');
const userService = require("../services/user.service.js");

// Create a new auction property
const createAuctionProperty = async (userId, auctionPropertyData, file) => {
  const user = await userService.getUserById(userId);
  console.log(user);
  const imageURL = await uploadImage(file);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can add auction property.');
  }
  const { propertyID } = auctionPropertyData;

  const existingAuctionProperty = await AuctionProperty.findOne({ propertyID });
  if (existingAuctionProperty) {
    throw new ConflictError('Auction property already exists with this configuration');
  }

  const auctionProperty = new AuctionProperty();
  auctionProperty.bankName=auctionPropertyData.bankName;
  auctionProperty.propertyID= auctionPropertyData.propertyID;
  auctionProperty.borrowerName= auctionPropertyData.borrowerName;
  auctionProperty.propertyType= auctionPropertyData.propertyType;
  auctionProperty.propertyArea= auctionPropertyData.propertyArea;
  auctionProperty.propertyAreaUnit= auctionPropertyData.propertyAreaUnit;
  auctionProperty.city= auctionPropertyData.city;
  auctionProperty.locality= auctionPropertyData.locality;
  auctionProperty.reservePrice= auctionPropertyData.reservePrice;
  auctionProperty.emdAmount= auctionPropertyData.emdAmount;
  auctionProperty.emdSubmissionDeadline= auctionPropertyData.emdSubmissionDeadline;
  auctionProperty.auctionStartDateTime= auctionPropertyData.auctionStartDateTime;
  auctionProperty.auctionEndDateTime= auctionPropertyData.auctionEndDateTime;
  auctionProperty.profilePicture= imageURL;

  return await auctionProperty.save();
};

// Get all auction properties
// const getAllAuctionProperties = async () => {
//   return await AuctionProperty.find();
// };
const getAllAuctionProperties = async (filters, sortBy, sortOrder) => {
  const query = {};

  // Apply filters
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;

  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.reservePrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.reservePrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.reservePrice = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await AuctionProperty.find(query).sort(sortCriteria).exec();
  
  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  // const filteredPropertiesResponse = encrypt(JSON.stringify(filteredProperties), process.env.ENCRYPTION_KEY);
  // return filteredPropertiesResponse;
  return filteredProperties;
};


// Get auction property by ID
const getAuctionPropertyById = async (auctionPropertyId) => {
  const auctionProperty = await AuctionProperty.findById(auctionPropertyId);
  if (!auctionProperty) {
    throw new NotFoundError('Auction property not found');
  }
  return auctionProperty;
};

// Update auction property
const updateAuctionProperty = async (userId, auctionPropertyId, updateData) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can update auction property.');
  }
  const auctionProperty = await AuctionProperty.findById(auctionPropertyId);
  if (!auctionProperty) {
    throw new NotFoundError('Auction property not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = ['bankName','propertyID', 'propertyType', 'propertyArea', 'propertyAreaUnit', 'city', 'district','state','borrowerName', 'reservePrice', 'emdAmount', 'emdSubmissionDeadline', 'auctionStartDateTime', 'auctionEndDateTime'];
  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      auctionProperty[field] = updateData[field];
    }
  });

  return await auctionProperty.save();
};

// Delete auction property
const deleteAuctionProperty = async (userId, auctionPropertyId) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can delete auction property.');
  }

  const auctionProperty = await AuctionProperty.findByIdAndDelete(auctionPropertyId);
  if (!auctionProperty) {
    throw new NotFoundError('Auction property not found');
  }

  return auctionProperty;
};

module.exports = {
  createAuctionProperty,
  getAllAuctionProperties,
  getAuctionPropertyById,
  updateAuctionProperty,
  deleteAuctionProperty,
};
