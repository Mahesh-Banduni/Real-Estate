const villaService = require('../../services/Residential/villaService');

// Controller for creating a new Villa
const createVilla = async (req, res, next) => {
  try {
    const villa = await villaService.createVilla(req.body);
    res.status(201).json(villa);
  } catch (error) {
    next(error);
  }
};

// Controller for getting all Villas
const getAllVillas = async (req, res, next) => {
  try {
    const villas = await villaService.getAllVillas();
    res.status(200).json(villas);
  } catch (error) {
    next(error);
  }
};

// Controller for getting a Villa by ID
const getVillaById = async (req, res, next) => {
  try {
    const villa = await villaService.getVillaById(req.params.id);
    res.status(200).json(villa);
  } catch (error) {
    next(error);
  }
};

// Controller for updating a Villa by ID
const updateVilla = async (req, res, next) => {
  try {
    const updatedVilla = await villaService.updateVilla(req.params.id, req.body);
    res.status(200).json(updatedVilla);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a Villa by ID
const deleteVilla = async (req, res, next) => {
  try {
    await villaService.deleteVilla(req.params.id);
    res.status(200).json({ message: 'Villa deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVilla,
  getAllVillas,
  getVillaById,
  updateVilla,
  deleteVilla,
};
