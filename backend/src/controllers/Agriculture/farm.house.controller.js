const farmHouseService = require('../../services/Agriculture/farm.house.service');

// Create a new FarmHouse
exports.createFarmHouse = async (req, res, next) => {
  try {
    const farmHouse = await farmHouseService.createFarmHouse(req.body);
    res.status(201).json(farmHouse);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all FarmHouses
exports.getAllFarmHouses = async (req, res, next) => {
  try {
    const farmHouses = await farmHouseService.getAllFarmHouses();
    res.status(200).json(farmHouses);
  } catch (error) {
    next(error);
  }
};

// Get FarmHouse by ID
exports.getFarmHouseById = async (req, res, next) => {
  try {
    const farmHouse = await farmHouseService.getFarmHouseById(req.params.id);
    res.status(200).json(farmHouse);
  } catch (error) {
    next(error);
  }
};

// Update FarmHouse by ID
exports.updateFarmHouse = async (req, res, next) => {
  try {
    const updatedFarmHouse = await farmHouseService.updateFarmHouse(req.params.id, req.body);
    res.status(200).json(updatedFarmHouse);
  } catch (error) {
    next(error);
  }
};

// Delete FarmHouse by ID
exports.deleteFarmHouse = async (req, res, next) => {
  try {
    await farmHouseService.deleteFarmHouse(req.params.id);
    res.status(200).json({ message: 'FarmHouse deleted successfully' });
  } catch (error) {
    next(error);
  }
};
