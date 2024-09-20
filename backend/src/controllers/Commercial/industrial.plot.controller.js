const industrialPlotService = require('../../services/Commercial/industrial.plot.service');

// Create a new Industrial Plot
exports.createIndustrialPlot = async (req, res, next) => {
  try {
    const industrialPlot = await industrialPlotService.createIndustrialPlot(req.body);
    res.status(201).json(industrialPlot);
  } catch (error) {
    next(error);
  }
};

// Get all Industrial Plots
exports.getAllIndustrialPlots = async (req, res, next) => {
  try {
    const industrialPlots = await industrialPlotService.getAllIndustrialPlots();
    res.status(200).json(industrialPlots);
  } catch (error) {
    next(error);
  }
};

// Get Industrial Plot by ID
exports.getIndustrialPlotById = async (req, res, next) => {
  try {
    const industrialPlot = await industrialPlotService.getIndustrialPlotById(req.params.id);
    res.status(200).json(industrialPlot);
  } catch (error) {
    next(error);
  }
};

// Update Industrial Plot by ID
exports.updateIndustrialPlot = async (req, res, next) => {
  try {
    const updatedIndustrialPlot = await industrialPlotService.updateIndustrialPlot(req.params.id, req.body);
    res.status(200).json(updatedIndustrialPlot);
  } catch (error) {
    next(error);
  }
};

// Delete Industrial Plot by ID
exports.deleteIndustrialPlot = async (req, res, next) => {
  try {
    await industrialPlotService.deleteIndustrialPlot(req.params.id);
    res.status(200).json({ message: 'Industrial Plot deleted successfully' });
  } catch (error) {
    next(error);
  }
};
