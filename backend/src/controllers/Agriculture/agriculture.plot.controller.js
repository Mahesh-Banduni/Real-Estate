const agriculturePlotService = require('../../services/Agriculture/agriculture.plot.service');

// Create a new Agriculture Plot
exports.createAgriculturePlot = async (req, res, next) => {
  try {
    const agriculturePlot = await agriculturePlotService.createAgriculturePlot(req.body);
    res.status(201).json(agriculturePlot);
  } catch (error) {
    next(error);
  }
};

// Get all Agriculture Plots
exports.getAllAgriculturePlots = async (req, res, next) => {
  try {
    const agriculturePlots = await agriculturePlotService.getAllAgriculturePlots();
    res.status(200).json(agriculturePlots);
  } catch (error) {
    next(error);
  }
};

// Get Agriculture Plot by ID
exports.getAgriculturePlotById = async (req, res, next) => {
  try {
    const agriculturePlot = await agriculturePlotService.getAgriculturePlotById(req.params.id);
    res.status(200).json(agriculturePlot);
  } catch (error) {
    next(error);
  }
};

// Update Agriculture Plot by ID
exports.updateAgriculturePlot = async (req, res, next) => {
  try {
    const updatedAgriculturePlot = await agriculturePlotService.updateAgriculturePlot(req.params.id, req.body);
    res.status(200).json(updatedAgriculturePlot);
  } catch (error) {
    next(error);
  }
};

// Delete Agriculture Plot by ID
exports.deleteAgriculturePlot = async (req, res, next) => {
  try {
    await agriculturePlotService.deleteAgriculturePlot(req.params.id);
    res.status(200).json({ message: 'Agriculture Plot deleted successfully' });
  } catch (error) {
    next(error);
  }
};
