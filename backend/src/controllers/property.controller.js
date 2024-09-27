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

const searchProperty = async (req, res, next) => {
  try {
    const { propertyPurpose } = req.params; // propertyPurpose from params
    const filters = req.query; // Filters from query params
    const properties = await propertyService.searchProperty(propertyPurpose, filters);
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

const handpickedProperty = async (req, res, next) => {
  try {
    const { propertyPurpose } = req.params; // propertyPurpose from params
    const filters = req.query; // Filters from query params
    const properties = await propertyService.handpickedProperty(propertyPurpose, filters);
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

 const markHandpickedProperty= async (req, res, next) => {
  try {
    const property = await propertyService.markHandpickedProperty(req.params.id, req.params.id);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

const unmarkHandpickedProperty= async (req, res, next) => {
  try {
    const property = await propertyService.unmarkHandpickedProperty(req.params.id, req.userId);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  searchProperty,
  handpickedProperty,
  markHandpickedProperty,
  unmarkHandpickedProperty
};
