const propertyService = require('../services/propertyService');

// Create a new property
exports.createProperty = async (req, res, next) => {
  try {
    const property = await propertyService.createProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    next(error);
  }
};

// Get all properties
exports.getAllProperties = async (req, res, next) => {
  try {
    const properties = await propertyService.getAllProperties();
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

// Get property by ID
exports.getPropertyById = async (req, res, next) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

// Update property by ID
exports.updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await propertyService.updateProperty(req.params.id, req.body);
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

// Delete property by ID
exports.deleteProperty = async (req, res, next) => {
  try {
    await propertyService.deleteProperty(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    next(error);
  }
};
