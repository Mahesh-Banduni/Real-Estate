const AgriculturePlot = require('../../models/agriculture.plot.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Agriculture Plot
const createAgriculturePlot = async (plotData) => {
  const agriculturePlot = new AgriculturePlot();

  // Assigning data to agriculture plot fields
  agriculturePlot.city = plotData.city;
  agriculturePlot.locality = plotData.locality;
  agriculturePlot.Address = plotData.Address;
  agriculturePlot.floorsAllowed = plotData.floorsAllowed;
  agriculturePlot.openSides = plotData.openSides;
  agriculturePlot.facingRoadWidth = plotData.facingRoadWidth;
  agriculturePlot.boundaryWall = plotData.boundaryWall;
  agriculturePlot.plotArea = plotData.plotArea;
  agriculturePlot.areaUnit = plotData.areaUnit;
  agriculturePlot.lengthdimension = plotData.lengthdimension;
  agriculturePlot.widthdimension = plotData.widthdimension;
  agriculturePlot.cornerPlot = plotData.cornerPlot;
  agriculturePlot.currentlyLeasedOut = plotData.currentlyLeasedOut;
  agriculturePlot.expectedPrice = plotData.expectedPrice;
  agriculturePlot.bookingAmount = plotData.bookingAmount;
  agriculturePlot.priceNegotiable = plotData.priceNegotiable;
  agriculturePlot.overlooking = plotData.overlooking;
  agriculturePlot.facing = plotData.facing;
  agriculturePlot.approvedBy = plotData.approvedBy;
  agriculturePlot.plotType = plotData.plotType;
  agriculturePlot.status = plotData.status;
  agriculturePlot.ownership = plotData.ownership;
  agriculturePlot.transactionType = plotData.transactionType;
  agriculturePlot.features = plotData.features;
  agriculturePlot.titleDeed = plotData.titleDeed;
  agriculturePlot.previousOwnerTitleDeedAvailable = plotData.previousOwnerTitleDeedAvailable;
  agriculturePlot.revenueDocument = plotData.revenueDocument;
  agriculturePlot.encumberenceCertificate = plotData.encumberenceCertificate;
  agriculturePlot.conversionCertificate = plotData.conversionCertificate;
  agriculturePlot.waterConnection = plotData.waterConnection;
  agriculturePlot.electricityConnection = plotData.electricityConnection;
  agriculturePlot.sewageConnection = plotData.sewageConnection;
  agriculturePlot.roadAvailable = plotData.roadAvailable;

  return await agriculturePlot.save();
};

// Get all Agriculture Plots
const getAllAgriculturePlots = async () => {
  return await AgriculturePlot.find();
};

// Get Agriculture Plot by ID
const getAgriculturePlotById = async (plotId) => {
  const agriculturePlot = await AgriculturePlot.findById(plotId);
  if (!agriculturePlot) {
    throw new NotFoundError('Agriculture Plot not found');
  }
  return agriculturePlot;
};

// Update Agriculture Plot by ID
const updateAgriculturePlot = async (plotId, updateData) => {
  const agriculturePlot = await AgriculturePlot.findById(plotId);
  if (!agriculturePlot) {
    throw new NotFoundError('Agriculture Plot not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'Address', 'floorsAllowed', 'openSides',
    'facingRoadWidth', 'boundaryWall', 'plotArea', 'areaUnit',
    'lengthdimension', 'widthdimension', 'cornerPlot', 'currentlyLeasedOut',
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'overlooking',
    'facing', 'approvedBy', 'plotType', 'status', 'ownership',
    'transactionType', 'features', 'titleDeed', 'previousOwnerTitleDeedAvailable',
    'revenueDocument', 'encumberenceCertificate', 'conversionCertificate',
    'waterConnection', 'electricityConnection', 'sewageConnection', 'roadAvailable'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      agriculturePlot[field] = updateData[field];
    }
  });

  return await agriculturePlot.save();
};

// Delete Agriculture Plot by ID
const deleteAgriculturePlot = async (plotId) => {
  const agriculturePlot = await AgriculturePlot.findByIdAndDelete(plotId);
  if (!agriculturePlot) {
    throw new NotFoundError('Agriculture Plot not found');
  }
  return agriculturePlot;
};

module.exports = {
  createAgriculturePlot,
  getAllAgriculturePlots,
  getAgriculturePlotById,
  updateAgriculturePlot,
  deleteAgriculturePlot,
};
