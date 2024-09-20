const itParkSEZService = require('../../services/Commercial/IT.park.SEZ.office.space.service');

// Create a new IT Park SEZ Office Space
exports.createITParkSEZOfficeSpace = async (req, res, next) => {
  try {
    const officeSpace = await itParkSEZService.createITParkSEZOfficeSpace(req.body);
    res.status(201).json(officeSpace);
  } catch (error) {
    next(error);
  }
};

// Get all IT Park SEZ Office Spaces
exports.getAllITParkSEZOfficeSpaces = async (req, res, next) => {
  try {
    const officeSpaces = await itParkSEZService.getAllITParkSEZOfficeSpaces();
    res.status(200).json(officeSpaces);
  } catch (error) {
    next(error);
  }
};

// Get IT Park SEZ Office Space by ID
exports.getITParkSEZOfficeSpaceById = async (req, res, next) => {
  try {
    const officeSpace = await itParkSEZService.getITParkSEZOfficeSpaceById(req.params.id);
    res.status(200).json(officeSpace);
  } catch (error) {
    next(error);
  }
};

// Update IT Park SEZ Office Space by ID
exports.updateITParkSEZOfficeSpace = async (req, res, next) => {
  try {
    const updatedOfficeSpace = await itParkSEZService.updateITParkSEZOfficeSpace(req.params.id, req.body);
    res.status(200).json(updatedOfficeSpace);
  } catch (error) {
    next(error);
  }
};

// Delete IT Park SEZ Office Space by ID
exports.deleteITParkSEZOfficeSpace = async (req, res, next) => {
  try {
    await itParkSEZService.deleteITParkSEZOfficeSpace(req.params.id);
    res.status(200).json({ message: 'IT Park SEZ Office Space deleted successfully' });
  } catch (error) {
    next(error);
  }
};
