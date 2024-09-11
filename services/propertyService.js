const Property = require('../models/Property');
const { NotFoundError, BadRequestError } = require('../errors/errors');

// Create a new property
const createProperty = async (propertyData) => {
  const property = new Property(propertyData);
  return await property.save();
};

// Get all properties
const getAllProperties = async () => {
  return await Property.find().populate('user', 'name email');
};

// Get property by ID
const getPropertyById = async (propertyId) => {
  const property = await Property.findById(propertyId).populate('user', 'name email');
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  return property;
};

// Update property (only description, price, images, isAvailable)
const updateProperty = async (propertyId, updateData) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  // Only update allowed fields
  const allowedUpdates = ['description', 'price', 'images', 'isAvailable'];
  allowedUpdates.forEach((field) => {
    if (updateData[field] !== undefined) {
      property[field] = updateData[field];
    }
  });

  // Validate if any field was actually updated
  if (Object.keys(updateData).length === 0) {
    throw new BadRequestError('No valid fields to update');
  }

  return await property.save();
};

// Delete a property
const deleteProperty = async (propertyId) => {
  const property = await Property.findByIdAndDelete(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  return property;
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
