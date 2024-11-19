const AuctionProperty = require('../models/auction.property.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const userService = require("../services/user.service.js");

// Create a new auction property
const createAuctionProperty = async (userId, auctionPropertyData) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can add auction property.');
  }
  const { propertyID } = auctionPropertyData;

  const existingAuctionProperty = await AuctionProperty.findOne({ propertyID });
  if (existingAuctionProperty) {
    throw new ConflictError('Auction property already exists with this configuration');
  }

  const auctionProperty = new AuctionProperty(auctionPropertyData);
  return await auctionProperty.save();
};

// Get all auction properties
const getAllAuctionProperties = async () => {
  return await AuctionProperty.find();
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
