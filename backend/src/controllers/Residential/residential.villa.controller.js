const residentialVillaService = require('../../services/Residential/residential.villa.service');

// Controller for creating a new Villa
const createResidentialVilla = async (req, res, next) => {
  try {
    const residentialVilla = await residentVillaService.createResidentVilla(req.body);
    res.status(201).json(residentVilla);
  } catch (error) {
    next(error);
  }
};

// Controller for getting all Villas
const getAllResidentialVillas = async (req, res, next) => {
  try {
    const residentVillas = await residentVillaService.getAllResidentialVillas();
    res.status(200).json(residentVillas);
  } catch (error) {
    next(error);
  }
};

// Controller for getting a Villa by ID
const getResidentialVillaById = async (req, res, next) => {
  try {
    const residentVilla = await residentVillaService.getResidentialVillaById(req.params.id);
    res.status(200).json(residentVilla);
  } catch (error) {
    next(error);
  }
};

// Controller for updating a Villa by ID
const updateResidentialVilla = async (req, res, next) => {
  try {
    const updatedResidentialVilla = await residentVillaService.updateResidentialVilla(req.params.id, req.body);
    res.status(200).json(updatedResidentVilla);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a Villa by ID
const deleteResidentialVilla = async (req, res, next) => {
  try {
    await residentVillaService.deleteResidentialVilla(req.params.id);
    res.status(200).json({ message: 'Residential Villa deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createResidentialVilla,
  getAllResidentialVillas,
  getResidentialVillaById,
  updateResidentialVilla,
  deleteResidentialVilla,
};
