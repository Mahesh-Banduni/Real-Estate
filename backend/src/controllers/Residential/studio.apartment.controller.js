const studioApartmentService = require('../../services/Residential/studio.apartment.service');

// Create a new Studio Apartment
exports.createStudioApartment = async (req, res, next) => {
  try {
    const apartment = await studioApartmentService.createStudioApartment(req.body);
    res.status(201).json(apartment);
  } catch (error) {
    next(error);
  }
};

// Get all Studio Apartments
exports.getAllStudioApartments = async (req, res, next) => {
  try {
    const apartments = await studioApartmentService.getAllStudioApartments();
    res.status(200).json(apartments);
  } catch (error) {
    next(error);
  }
};

// Get Studio Apartment by ID
exports.getStudioApartmentById = async (req, res, next) => {
  try {
    const apartment = await studioApartmentService.getStudioApartmentById(req.params.id);
    res.status(200).json(apartment);
  } catch (error) {
    next(error);
  }
};

// Update Studio Apartment by ID
exports.updateStudioApartment = async (req, res, next) => {
  try {
    const updatedApartment = await studioApartmentService.updateStudioApartment(req.params.id, req.body);
    res.status(200).json(updatedApartment);
  } catch (error) {
    next(error);
  }
};

// Delete Studio Apartment by ID
exports.deleteStudioApartment = async (req, res, next) => {
  try {
    await studioApartmentService.deleteStudioApartment(req.params.id);
    res.status(200).json({ message: 'Studio Apartment deleted successfully' });
  } catch (error) {
    next(error);
  }
};