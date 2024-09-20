const commercialShowroomService = require('../../services/Commercial/commercial.showroom.service');

// Create a new Commercial Showroom
exports.createCommercialShowroom = async (req, res, next) => {
  try {
    const commercialShowroom = await commercialShowroomService.createCommercialShowroom(req.body);
    res.status(201).json(commercialShowroom);
  } catch (error) {
    next(error);
  }
};

// Get all Commercial Showrooms
exports.getAllCommercialShowrooms = async (req, res, next) => {
  try {
    const commercialShowrooms = await commercialShowroomService.getAllCommercialShowrooms();
    res.status(200).json(commercialShowrooms);
  } catch (error) {
    next(error);
  }
};

// Get Commercial Showroom by ID
exports.getCommercialShowroomById = async (req, res, next) => {
  try {
    const commercialShowroom = await commercialShowroomService.getCommercialShowroomById(req.params.id);
    res.status(200).json(commercialShowroom);
  } catch (error) {
    next(error);
  }
};

// Update Commercial Showroom by ID
exports.updateCommercialShowroom = async (req, res, next) => {
  try {
    const updatedCommercialShowroom = await commercialShowroomService.updateCommercialShowroom(req.params.id, req.body);
    res.status(200).json(updatedCommercialShowroom);
  } catch (error) {
    next(error);
  }
};

// Delete Commercial Showroom by ID
exports.deleteCommercialShowroom = async (req, res, next) => {
  try {
    await commercialShowroomService.deleteCommercialShowroom(req.params.id);
    res.status(200).json({ message: 'Commercial Showroom deleted successfully' });
  } catch (error) {
    next(error);
  }
};
