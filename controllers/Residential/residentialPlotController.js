const residentialPlotService = require('../../services/Residential/residentialPlotService');

// Create a new Residential Plot
exports.createResidentialPlot = async (req, res, next) => {
  try {
    const residentialPlot = await residentialPlotService.createResidentialPlot(req.body);
    res.status(201).json(residentialPlot);
  } catch (error) {
    next(error);
  }
};

// Get all Residential Plots
exports.getAllResidentialPlots = async (req, res, next) => {
  try {
    const residentialPlots = await residentialPlotService.getAllResidentialPlots();
    res.status(200).json(residentialPlots);
  } catch (error) {
    next(error);
  }
};

// Get Residential Plot by ID
exports.getResidentialPlotById = async (req, res, next) => {
  try {
    const residentialPlot = await residentialPlotService.getResidentialPlotById(req.params.id);
    res.status(200).json(residentialPlot);
  } catch (error) {
    next(error);
  }
};

// Update Residential Plot by ID
exports.updateResidentialPlot = async (req, res, next) => {
  try {
    const updatedResidentialPlot = await residentialPlotService.updateResidentialPlot(req.params.id, req.body);
    res.status(200).json(updatedResidentialPlot);
  } catch (error) {
    next(error);
  }
};

// Delete Residential Plot by ID
exports.deleteResidentialPlot = async (req, res, next) => {
  try {
    await residentialPlotService.deleteResidentialPlot(req.params.id);
    res.status(200).json({ message: 'Residential Plot deleted successfully' });
  } catch (error) {
    next(error);
  }
};
