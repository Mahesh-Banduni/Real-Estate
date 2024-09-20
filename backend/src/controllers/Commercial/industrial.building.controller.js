const industrialBuildingService = require('../../services/Commercial/industrial.building.service');

// Create a new Industrial Building
exports.createIndustrialBuilding = async (req, res, next) => {
  try {
    const industrialBuilding = await industrialBuildingService.createIndustrialBuilding(req.body);
    res.status(201).json(industrialBuilding);
  } catch (error) {
    next(error);
  }
};

// Get all Industrial Buildings
exports.getAllIndustrialBuildings = async (req, res, next) => {
  try {
    const industrialBuildings = await industrialBuildingService.getAllIndustrialBuildings();
    res.status(200).json(industrialBuildings);
  } catch (error) {
    next(error);
  }
};

// Get Industrial Building by ID
exports.getIndustrialBuildingById = async (req, res, next) => {
  try {
    const industrialBuilding = await industrialBuildingService.getIndustrialBuildingById(req.params.id);
    res.status(200).json(industrialBuilding);
  } catch (error) {
    next(error);
  }
};

// Update Industrial Building by ID
exports.updateIndustrialBuilding = async (req, res, next) => {
  try {
    const updatedIndustrialBuilding = await industrialBuildingService.updateIndustrialBuilding(req.params.id, req.body);
    res.status(200).json(updatedIndustrialBuilding);
  } catch (error) {
    next(error);
  }
};

// Delete Industrial Building by ID
exports.deleteIndustrialBuilding = async (req, res, next) => {
  try {
    await industrialBuildingService.deleteIndustrialBuilding(req.params.id);
    res.status(200).json({ message: 'Industrial Building deleted successfully' });
  } catch (error) {
    next(error);
  }
};
