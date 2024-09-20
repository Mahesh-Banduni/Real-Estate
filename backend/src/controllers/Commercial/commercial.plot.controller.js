const commercialPlotService = require('../../services/Commercial/commercial.plot.service');

// Create a new Commercial Plot
exports.createCommercialPlot = async (req, res, next) => {
  try {
    const commercialPlot = await commercialPlotService.createCommercialPlot(req.body);
    res.status(201).json(commercialPlot);
  } catch (error) {
    next(error);
  }
};

// Get all Commercial Plots
exports.getAllCommercialPlots = async (req, res, next) => {
  try {
    const commercialPlots = await commercialPlotService.getAllCommercialPlots();
    res.status(200).json(commercialPlots);
  } catch (error) {
    next(error);
  }
};

// Get Commercial Plot by ID
exports.getCommercialPlotById = async (req, res, next) => {
  try {
    const commercialPlot = await commercialPlotService.getCommercialPlotById(req.params.id);
    res.status(200).json(commercialPlot);
  } catch (error) {
    next(error);
  }
};

// Update Commercial Plot by ID
exports.updateCommercialPlot = async (req, res, next) => {
  try {
    const updatedCommercialPlot = await commercialPlotService.updateCommercialPlot(req.params.id, req.body);
    res.status(200).json(updatedCommercialPlot);
  } catch (error) {
    next(error);
  }
};

// Delete Commercial Plot by ID
exports.deleteCommercialPlot = async (req, res, next) => {
  try {
    await commercialPlotService.deleteCommercialPlot(req.params.id);
    res.status(200).json({ message: 'Commercial Plot deleted successfully' });
  } catch (error) {
    next(error);
  }
};
