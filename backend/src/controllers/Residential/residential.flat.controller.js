const residentialFlatService = require('../../services/Residential/residential.flat.service');

// Create a new Flat
exports.createResidentialFlat = async (req, res, next) => {
  try {
    const residentialFlat = await residentialFlatService.createResidentialFlat(req.body);
    res.status(201).json(residentialFlat);
  } catch (error) {
    next(error);
  }
};

// Get all Flats
exports.getAllResidentialFlats = async (req, res, next) => {
  try {
    const residentialFlats = await residentialFlatService.getAllResidentialFlats();
    res.status(200).json(residentialFlats);
  } catch (error) {
    next(error);
  }
};

// Get Flat by ID
exports.getResidentialFlatById = async (req, res, next) => {
  try {
    const residentialFlat = await residentialFlatService.getResidentialFlatById(req.params.id);
    res.status(200).json(residentialFlat);
  } catch (error) {
    next(error);
  }
};

// Update Flat by ID
exports.updateResidentialFlat = async (req, res, next) => {
  try {
    const updatedResidentialFlat = await residentialFlatService.updateResidentialFlat(req.params.id, req.body);
    res.status(200).json(updatedResidentialFlat);
  } catch (error) {
    next(error);
  }
};

// Delete Flat by ID
exports.deleteResidentialFlat = async (req, res, next) => {
  try {
    await residentialFlatService.deleteResidentialFlat(req.params.id);
    res.status(200).json({ message: 'Residential Flat deleted successfully' });
  } catch (error) {
    next(error);
  }
};
