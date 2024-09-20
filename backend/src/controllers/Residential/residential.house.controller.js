const residentialHouseService = require('../../services/Residential/residential.house.service');

// Controller for creating a new Residential House
const createResidentialHouse = async (req, res, next) => {
  try {
    const residentialHouse = await residentialHouseService.createResidentialHouse(req.body);
    res.status(201).json(residentialHouse);
  } catch (error) {
    next(error);
  }
};

// Controller for getting all Residential Houses
const getAllResidentialHouses = async (req, res, next) => {
  try {
    const residentialHouses = await residentialHouseService.getAllResidentialHouses();
    res.status(200).json(residentialHouses);
  } catch (error) {
    next(error);
  }
};

// Controller for getting a Residential House by ID
const getResidentialHouseById = async (req, res, next) => {
  try {
    const residentialHouse = await residentialHouseService.getResidentialHouseById(req.params.id);
    res.status(200).json(residentialHouse);
  } catch (error) {
    next(error);
  }
};

// Controller for updating a Residential House by ID
const updateResidentialHouse = async (req, res, next) => {
  try {
    const updatedResidentialHouse = await residentialHouseService.updateResidentialHouse(req.params.id, req.body);
    res.status(200).json(updatedResidentialHouse);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a Residential House by ID
const deleteResidentialHouse = async (req, res, next) => {
  try {
    await residentialHouseService.deleteResidentialHouse(req.params.id);
    res.status(200).json({ message: 'Residential house deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createResidentialHouse,
  getAllResidentialHouses,
  getResidentialHouseById,
  updateResidentialHouse,
  deleteResidentialHouse,
};
