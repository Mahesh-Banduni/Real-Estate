const propertyService = require('../services/property.service.js');

// Controller for creating a new Property
const createProperty = async (req, res, next) => {
  try {
    const property = await propertyService.createProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    next(error);
  }
};

// Controller for getting a Property by ID
const getPropertyById = async (req, res, next) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

// Controller for updating a Property by ID
const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await propertyService.updateProperty(req.params.id, req.body);
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a Property by ID
const deleteProperty = async (req, res, next) => {
  try {
    await propertyService.deleteProperty(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const propertyForSellFilter = async (req, res, next) => {
  try {
    const filters = req.query; 
    const filteredProperties = await propertyService.propertyForSellFilter(filters);
    res.status(200).json(filteredProperties);
  } catch (error) {
    next(error);
  }
};

const exchangePropertyFilter = async (req, res, next) => {
  try {
    const filters = req.query; 
    const filteredProperties = await propertyService.exchangePropertyFilter(filters);
    res.status(200).json(filteredProperties);
  } catch (error) {
    next(error);
  }
};
const partnershipPropertyFilter = async (req, res, next) => {
  try {
    const filters = req.query; 
    const filteredProperties = await propertyService.partnershipPropertyFilter(filters);
    res.status(200).json(filteredProperties);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  propertyForSellFilter,
  exchangePropertyFilter,
  partnershipPropertyFilter
};
