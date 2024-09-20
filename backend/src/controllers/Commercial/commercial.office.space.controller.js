const commercialOfficeSpaceService = require('../../services/Commercial/commercial.office.space.service');

// Create a new Commercial Office Space
exports.createCommercialOfficeSpace = async (req, res, next) => {
  try {
    const officeSpace = await commercialOfficeSpaceService.createCommercialOfficeSpace(req.body);
    res.status(201).json(officeSpace);
  } catch (error) {
    next(error);
  }
};

// Get all Commercial Office Spaces
exports.getAllCommercialOfficeSpaces = async (req, res, next) => {
  try {
    const officeSpaces = await commercialOfficeSpaceService.getAllCommercialOfficeSpaces();
    res.status(200).json(officeSpaces);
  } catch (error) {
    next(error);
  }
};

// Get Commercial Office Space by ID
exports.getCommercialOfficeSpaceById = async (req, res, next) => {
  try {
    const officeSpace = await commercialOfficeSpaceService.getCommercialOfficeSpaceById(req.params.id);
    res.status(200).json(officeSpace);
  } catch (error) {
    next(error);
  }
};

// Update Commercial Office Space by ID
exports.updateCommercialOfficeSpace = async (req, res, next) => {
  try {
    const updatedOfficeSpace = await commercialOfficeSpaceService.updateCommercialOfficeSpace(req.params.id, req.body);
    res.status(200).json(updatedOfficeSpace);
  } catch (error) {
    next(error);
  }
};

// Delete Commercial Office Space by ID
exports.deleteCommercialOfficeSpace = async (req, res, next) => {
  try {
    await commercialOfficeSpaceService.deleteCommercialOfficeSpace(req.params.id);
    res.status(200).json({ message: 'Commercial Office Space deleted successfully' });
  } catch (error) {
    next(error);
  }
};
