const builderFloorApartmentService = require('../../services/Residential/builderFloorApartmentService');

// Create a new Builder Floor Apartment
exports.createBuilderFloorApartment = async (req, res, next) => {
  try {
    const apartment = await builderFloorApartmentService.createBuilderFloorApartment(req.body);
    res.status(201).json(apartment);
  } catch (error) {
    next(error);
  }
};

// Get all Builder Floor Apartments
exports.getAllBuilderFloorApartments = async (req, res, next) => {
  try {
    const apartments = await builderFloorApartmentService.getAllBuilderFloorApartments();
    res.status(200).json(apartments);
  } catch (error) {
    next(error);
  }
};

// Get Builder Floor Apartment by ID
exports.getBuilderFloorApartmentById = async (req, res, next) => {
  try {
    const apartment = await builderFloorApartmentService.getBuilderFloorApartmentById(req.params.id);
    res.status(200).json(apartment);
  } catch (error) {
    next(error);
  }
};

// Update Builder Floor Apartment by ID
exports.updateBuilderFloorApartment = async (req, res, next) => {
  try {
    const updatedApartment = await builderFloorApartmentService.updateBuilderFloorApartment(req.params.id, req.body);
    res.status(200).json(updatedApartment);
  } catch (error) {
    next(error);
  }
};

// Delete Builder Floor Apartment by ID
exports.deleteBuilderFloorApartment = async (req, res, next) => {
  try {
    await builderFloorApartmentService.deleteBuilderFloorApartment(req.params.id);
    res.status(200).json({ message: 'Builder Floor Apartment deleted successfully' });
  } catch (error) {
    next(error);
  }
};
