const CommercialPlot = require('../../models/commercial.plot.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Commercial Plot
const createCommercialPlot = async (plotData) => {
  const commercialPlot = new CommercialPlot();

  // Assigning data to commercial plot fields
  commercialPlot.city = plotData.city;
  commercialPlot.locality = plotData.locality;
  commercialPlot.projectSocietyName = plotData.projectSocietyName;
  commercialPlot.Address = plotData.Address;
  commercialPlot.landZone = plotData.landZone;
  commercialPlot.floorsAllowed = plotData.floorsAllowed;
  commercialPlot.openSides = plotData.openSides;
  commercialPlot.facingRoadWidth = plotData.facingRoadWidth;
  commercialPlot.boundaryWall = plotData.boundaryWall;
  commercialPlot.plotArea = plotData.plotArea;
  commercialPlot.areaUnit = plotData.areaUnit;
  commercialPlot.lengthdimension = plotData.lengthdimension;
  commercialPlot.widthdimension = plotData.widthdimension;
  commercialPlot.cornerPlot = plotData.cornerPlot;
  commercialPlot.currentlyLeasedOut = plotData.currentlyLeasedOut;
  commercialPlot.expectedPrice = plotData.expectedPrice;
  commercialPlot.bookingAmount = plotData.bookingAmount;
  commercialPlot.priceNegotiable = plotData.priceNegotiable;
  commercialPlot.overlooking = plotData.overlooking;
  commercialPlot.facing = plotData.facing;
  commercialPlot.approvedBy = plotData.approvedBy;
  commercialPlot.plotType = plotData.plotType;
  commercialPlot.status = plotData.status;
  commercialPlot.ownership = plotData.ownership;
  commercialPlot.transactionType = plotData.transactionType;
  commercialPlot.features = plotData.features;
  commercialPlot.titleDeed = plotData.titleDeed;
  commercialPlot.previousOwnerTitleDeedAvailable = plotData.previousOwnerTitleDeedAvailable;
  commercialPlot.revenueDocument = plotData.revenueDocument;
  commercialPlot.encumberenceCertificate = plotData.encumberenceCertificate;
  commercialPlot.conversionCertificate = plotData.conversionCertificate;
  commercialPlot.waterConnection = plotData.waterConnection;
  commercialPlot.electricityConnection = plotData.electricityConnection;
  commercialPlot.sewageConnection = plotData.sewageConnection;
  commercialPlot.roadAvailable = plotData.roadAvailable;

  return await commercialPlot.save();
};

// Get all Commercial Plots
const getAllCommercialPlots = async () => {
  return await CommercialPlot.find();
};

// Get Commercial Plot by ID
const getCommercialPlotById = async (plotId) => {
  const commercialPlot = await CommercialPlot.findById(plotId);
  if (!commercialPlot) {
    throw new NotFoundError('Commercial plot not found');
  }
  return commercialPlot;
};

// Update Commercial Plot by ID
const updateCommercialPlot = async (plotId, updateData) => {
  const commercialPlot = await CommercialPlot.findById(plotId);
  if (!commercialPlot) {
    throw new NotFoundError('Commercial plot not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'landZone', 'floorsAllowed',
    'openSides', 'facingRoadWidth', 'boundaryWall', 'plotArea', 'areaUnit',
    'lengthdimension', 'widthdimension', 'cornerPlot', 'currentlyLeasedOut',
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'overlooking', 'facing',
    'approvedBy', 'plotType', 'status', 'ownership', 'transactionType', 'features',
    'titleDeed', 'previousOwnerTitleDeedAvailable', 'revenueDocument',
    'encumberenceCertificate', 'conversionCertificate', 'waterConnection',
    'electricityConnection', 'sewageConnection', 'roadAvailable'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      commercialPlot[field] = updateData[field];
    }
  });

  return await commercialPlot.save();
};

// Delete Commercial Plot by ID
const deleteCommercialPlot = async (plotId) => {
  const commercialPlot = await CommercialPlot.findByIdAndDelete(plotId);
  if (!commercialPlot) {
    throw new NotFoundError('Commercial plot not found');
  }
  return commercialPlot;
};

module.exports = {
  createCommercialPlot,
  getAllCommercialPlots,
  getCommercialPlotById,
  updateCommercialPlot,
  deleteCommercialPlot,
};
