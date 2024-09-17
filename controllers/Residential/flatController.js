const flatService = require('../../services/Residential/flatService');

// Create a new Flat
exports.createFlat = async (req, res, next) => {
  try {
    const flat = await flatService.createFlat(req.body);
    res.status(201).json(flat);
  } catch (error) {
    next(error);
  }
};

// Get all Flats
exports.getAllFlats = async (req, res, next) => {
  try {
    const flats = await flatService.getAllFlats();
    res.status(200).json(flats);
  } catch (error) {
    next(error);
  }
};

// Get Flat by ID
exports.getFlatById = async (req, res, next) => {
  try {
    const flat = await flatService.getFlatById(req.params.id);
    res.status(200).json(flat);
  } catch (error) {
    next(error);
  }
};

// Update Flat by ID
exports.updateFlat = async (req, res, next) => {
  try {
    const updatedFlat = await flatService.updateFlat(req.params.id, req.body);
    res.status(200).json(updatedFlat);
  } catch (error) {
    next(error);
  }
};

// Delete Flat by ID
exports.deleteFlat = async (req, res, next) => {
  try {
    await flatService.deleteFlat(req.params.id);
    res.status(200).json({ message: 'Flat deleted successfully' });
  } catch (error) {
    next(error);
  }
};
