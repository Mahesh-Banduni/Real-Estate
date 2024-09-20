const ResidentialPlot = require('../../models/residential.plot.model'); // Assuming ResidentialPlot model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Residential Plot
const createResidentialPlot = async (residentialPlotData) => {
  // Add validation for uniqueness if needed
  const residentialPlot = new ResidentialPlot();
  
  // Assigning data to residential plot fields
  residentialPlot.city = residentialPlotData.city;
  residentialPlot.locality = residentialPlotData.locality;
  residentialPlot.projectSocietyName = residentialPlotData.projectSocietyName;
  residentialPlot.Address = residentialPlotData.Address;
  residentialPlot.floorsAllowed = residentialPlotData.floorsAllowed;
  residentialPlot.openSides = residentialPlotData.openSides;
  residentialPlot.facingRoadWidth = residentialPlotData.facingRoadWidth;
  residentialPlot.boundaryWall = residentialPlotData.boundaryWall;
  residentialPlot.gatedColony = residentialPlotData.gatedColony;
  residentialPlot.approvedBy = residentialPlotData.approvedBy;
  residentialPlot.plotArea = residentialPlotData.plotArea;
  residentialPlot.areaUnit = residentialPlotData.areaUnit;
  residentialPlot.lengthdimension = residentialPlotData.lengthdimension;
  residentialPlot.widthdimension = residentialPlotData.widthdimension;
  residentialPlot.cornerPlot = residentialPlotData.cornerPlot;
  residentialPlot.expectedPrice = residentialPlotData.expectedPrice;
  residentialPlot.bookingAmount = residentialPlotData.bookingAmount;
  residentialPlot.priceNegotiable = residentialPlotData.priceNegotiable;
  residentialPlot.taxAndGovtChargesExcluded = residentialPlotData.taxAndGovtChargesExcluded;
  residentialPlot.allInclusivePrice = residentialPlotData.allInclusivePrice;
  residentialPlot.maintenanceCharge = residentialPlotData.maintenanceCharge;
  residentialPlot.maintenanceChargeUnit = residentialPlotData.maintenanceChargeUnit;
  residentialPlot.expectedRental = residentialPlotData.expectedRental;
  residentialPlot.bookingAmountRental = residentialPlotData.bookingAmountRental;
  residentialPlot.annualDuesPayable = residentialPlotData.annualDuesPayable;
  residentialPlot.uniquePropertyDescription = residentialPlotData.uniquePropertyDescription;
  residentialPlot.amenities = residentialPlotData.amenities;
  residentialPlot.overlooking = residentialPlotData.overlooking;
  residentialPlot.facing = residentialPlotData.facing;
  residentialPlot.status = residentialPlotData.status;
  residentialPlot.ownership = residentialPlotData.ownership;
  residentialPlot.transactionType = residentialPlotData.transactionType;
  residentialPlot.locationAdvantages = residentialPlotData.locationAdvantages;
  residentialPlot.titleDeed = residentialPlotData.titleDeed;
  residentialPlot.previousOwnerTitleDeedAvailable = residentialPlotData.previousOwnerTitleDeedAvailable;
  residentialPlot.revenueDocument = residentialPlotData.revenueDocument;
  residentialPlot.encumberenceCertificate = residentialPlotData.encumberenceCertificate;
  residentialPlot.conversionCertificate = residentialPlotData.conversionCertificate;
  residentialPlot.waterConnection = residentialPlotData.waterConnection;
  residentialPlot.electricityConnection = residentialPlotData.electricityConnection;
  residentialPlot.sewageConnection = residentialPlotData.sewageConnection;
  residentialPlot.roadAvailable = residentialPlotData.roadAvailable;

  return await residentialPlot.save();
};

// Get all Residential Plots
const getAllResidentialPlots = async () => {
  return await ResidentialPlot.find();
};

// Get Residential Plot by ID
const getResidentialPlotById = async (residentialPlotId) => {
  const residentialPlot = await ResidentialPlot.findById(residentialPlotId);
  if (!residentialPlot) {
    throw new NotFoundError('Residential Plot not found');
  }
  return residentialPlot;
};

// Update a Residential Plot by ID
const updateResidentialPlot = async (residentialPlotId, updateData) => {
  const residentialPlot = await ResidentialPlot.findById(residentialPlotId);
  if (!residentialPlot) {
    throw new NotFoundError('Residential Plot not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'projectSocietyName', 'Address', 'floorsAllowed', 
    'openSides', 'facingRoadWidth', 'boundaryWall', 'gatedColony', 'approvedBy', 
    'plotArea', 'areaUnit', 'lengthdimension', 'widthdimension', 'cornerPlot', 
    'expectedPrice', 'bookingAmount', 'priceNegotiable', 'taxAndGovtChargesExcluded', 
    'allInclusivePrice', 'maintenanceCharge', 'maintenanceChargeUnit', 'expectedRental', 
    'bookingAmountRental', 'annualDuesPayable', 'uniquePropertyDescription', 'amenities', 
    'overlooking', 'facing', 'status', 'ownership', 'transactionType', 'locationAdvantages', 
    'titleDeed', 'previousOwnerTitleDeedAvailable', 'revenueDocument', 'encumberenceCertificate', 
    'conversionCertificate', 'waterConnection', 'electricityConnection', 'sewageConnection', 'roadAvailable'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      residentialPlot[field] = updateData[field];
    }
  });

  return await residentialPlot.save();
};

// Delete a Residential Plot by ID
const deleteResidentialPlot = async (residentialPlotId) => {
  const residentialPlot = await ResidentialPlot.findByIdAndDelete(residentialPlotId);
  if (!residentialPlot) {
    throw new NotFoundError('Residential Plot not found');
  }
  return residentialPlot;
};

module.exports = {
  createResidentialPlot,
  getAllResidentialPlots,
  getResidentialPlotById,
  updateResidentialPlot,
  deleteResidentialPlot,
};
