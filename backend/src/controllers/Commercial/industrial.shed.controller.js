const industrialShedService = require('../../services/Commercial/industrial.shed.service');

// Create a new Industrial Shed
exports.createIndustrialShed = async (req, res, next) => {
  try {
    const industrialShed = await industrialShedService.createIndustrialShed(req.body);
    res.status(201).json(industrialShed);
  } catch (error) {
    next(error);
  }
};

// Get all Industrial Sheds
exports.getAllIndustrialSheds = async (req, res, next) => {
  try {
    const industrialSheds = await industrialShedService.getAllIndustrialSheds();
    res.status(200).json(industrialSheds);
  } catch (error) {
    next(error);
  }
};

// Get Industrial Shed by ID
exports.getIndustrialShedById = async (req, res, next) => {
  try {
    const industrialShed = await industrialShedService.getIndustrialShedById(req.params.id);
    res.status(200).json(industrialShed);
  } catch (error) {
    next(error);
  }
};

// Update Industrial Shed by ID
exports.updateIndustrialShed = async (req, res, next) => {
  try {
    const updatedIndustrialShed = await industrialShedService.updateIndustrialShed(req.params.id, req.body);
    res.status(200).json(updatedIndustrialShed);
  } catch (error) {
    next(error);
  }
};

// Delete Industrial Shed by ID
exports.deleteIndustrialShed = async (req, res, next) => {
  try {
    await industrialShedService.deleteIndustrialShed(req.params.id);
    res.status(200).json({ message: 'Industrial Shed deleted successfully' });
  } catch (error) {
    next(error);
  }
};
