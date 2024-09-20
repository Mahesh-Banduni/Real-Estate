const penthouseService = require("../../services/Residential/pent.house.service");

// Create a new Penthouse
exports.createPenthouse = async (req, res, next) => {
  try {
    const penthouse = await penthouseService.createPenthouse(req.body);
    res.status(201).json(penthouse);
  } catch (error) {
    next(error);
  }
};

// Get all Penthouses
exports.getAllPenthouses = async (req, res, next) => {
  try {
    const penthouses = await penthouseService.getAllPenthouses();
    res.status(200).json(penthouses);
  } catch (error) {
    next(error);
  }
};

// Get Penthouse by ID
exports.getPenthouseById = async (req, res, next) => {
  try {
    const penthouse = await penthouseService.getPenthouseById(req.params.id);
    res.status(200).json(penthouse);
  } catch (error) {
    next(error);
  }
};

// Update Penthouse by ID
exports.updatePenthouse = async (req, res, next) => {
  try {
    const updatedPenthouse = await penthouseService.updatePenthouse(req.params.id, req.body);
    res.status(200).json(updatedPenthouse);
  } catch (error) {
    next(error);
  }
};

// Delete Penthouse by ID
exports.deletePenthouse = async (req, res, next) => {
  try {
    await penthouseService.deletePenthouse(req.params.id);
    res.status(200).json({ message: 'Pent house deleted successfully' });
  } catch (error) {
    next(error);
  }
};
