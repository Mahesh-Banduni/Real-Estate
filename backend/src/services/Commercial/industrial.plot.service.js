const IndustrialPlot = require('../../models/industrial.plot.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Industrial Plot
const createIndustrialPlot = async (plotData) => {
  const industrialPlot = new IndustrialPlot();

  // Assigning data to industrial plot fields
  industrialPlot.city = plotData.city;
  industrialPlot.locality = plotData.locality;
  industrialPlot.Address = plotData.Address;
  industrialPlot.floorsAllowed = plotData.floorsAllowed;
  industrialPlot.openSides = plotData.openSides;
  industrialPlot.facingRoadWidth = plotData.facingRoadWidth;
  industrialPlot.boundaryWallMade = plotData.boundaryWallMade;
  industrialPlot.anyConstructionDone = plotData.anyConstructionDone;
  industrialPlot.plotArea = plotData.plotArea;
  industrialPlot.areaUnit = plotData.areaUnit;
  industrialPlot.lengthdimension = plotData.lengthdimension;
  industrialPlot.widthdimension = plotData.widthdimension;
  industrialPlot.cornerPlot = plotData.cornerPlot;
  industrialPlot.expectedPrice = plotData.expectedPrice;
  industrialPlot.bookingAmount = plotData.bookingAmount;
  industrialPlot.priceNegotiable = plotData.priceNegotiable;
  industrialPlot.overlooking = plotData.overlooking;
  industrialPlot.facing = plotData.facing;
  industrialPlot.approvedBy = plotData.approvedBy;
  industrialPlot.plotType = plotData.plotType;
  industrialPlot.status = plotData.status;
  industrialPlot.ownership = plotData.ownership;
  industrialPlot.transactionType = plotData.transactionType;
  industrialPlot.features = plotData.features;
  industrialPlot.titleDeed = plotData.titleDeed;
  industrialPlot.previousOwnerTitleDeedAvailable = plotData.previousOwnerTitleDeedAvailable;
  industrialPlot.revenueDocument = plotData.revenueDocument;
  industrialPlot.encumberenceCertificate = plotData.encumberenceCertificate;
  industrialPlot.conversionCertificate = plotData.conversionCertificate;
  industrialPlot.waterConnection = plotData.waterConnection;
  industrialPlot.electricityConnection = plotData.electricityConnection;
  industrialPlot.sewageConnection = plotData.sewageConnection;
  industrialPlot.roadAvailable = plotData.roadAvailable;

  return await industrialPlot.save();
};

// Get all Industrial Plots
const getAllIndustrialPlots = async () => {
  return await IndustrialPlot.find();
};

// Get Industrial Plot by ID
const getIndustrialPlotById = async (plotId) => {
  const industrialPlot = await IndustrialPlot.findById(plotId);
  if (!industrialPlot) {
    throw new NotFoundError('Industrial plot not found');
  }
  return industrialPlot;
};

// Update Industrial Plot by ID
const updateIndustrialPlot = async (plotId, updateData) => {
  const industrialPlot = await IndustrialPlot.findById(plotId);
  if (!industrialPlot) {
    throw new NotFoundError('Industrial plot not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'Address', 'floorsAllowed', 'openSides', 'facingRoadWidth',
    'boundaryWallMade', 'anyConstructionDone', 'plotArea', 'areaUnit', 'lengthdimension',
    'widthdimension', 'cornerPlot', 'expectedPrice', 'bookingAmount', 'priceNegotiable',
    'overlooking', 'facing', 'approvedBy', 'plotType', 'status', 'ownership',
    'transactionType', 'features', 'titleDeed', 'previousOwnerTitleDeedAvailable',
    'revenueDocument', 'encumberenceCertificate', 'conversionCertificate',
    'waterConnection', 'electricityConnection', 'sewageConnection', 'roadAvailable'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      industrialPlot[field] = updateData[field];
    }
  });

  return await industrialPlot.save();
};

// Delete Industrial Plot by ID
const deleteIndustrialPlot = async (plotId) => {
  const industrialPlot = await IndustrialPlot.findByIdAndDelete(plotId);
  if (!industrialPlot) {
    throw new NotFoundError('Industrial plot not found');
  }
  return industrialPlot;
};

module.exports = {
  createIndustrialPlot,
  getAllIndustrialPlots,
  getIndustrialPlotById,
  updateIndustrialPlot,
  deleteIndustrialPlot,
};
