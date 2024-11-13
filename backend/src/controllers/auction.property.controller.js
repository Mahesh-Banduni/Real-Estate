const auctionPropertyService = require('../services/auction.property.service.js');

// Create a new auction property
exports.createAuctionProperty = async (req, res, next) => {
  try {
    const auctionPropertyData = req.body;
    const auctionProperty = await auctionPropertyService.createAuctionProperty(auctionPropertyData);
    res.status(201).json({
      success: true,
      data: auctionProperty,
    });
  } catch (error) {
    next(error);
  }
};

// Get all auction properties
exports.getAllAuctionProperties = async (req, res, next) => {
  try {
    const auctionProperties = await auctionPropertyService.getAllAuctionProperties();
    res.status(200).json({
      success: true,
      data: auctionProperties,
    });
  } catch (error) {
    next(error);
  }
};

// Get auction property by ID
exports.getAuctionPropertyById = async (req, res, next) => {
  try {
    const auctionProperty = await auctionPropertyService.getAuctionPropertyById(req.params.id);
    res.status(200).json({
      success: true,
      data: auctionProperty,
    });
  } catch (error) {
    next(error);
  }
};

// Update auction property by ID
exports.updateAuctionProperty = async (req, res, next) => {
  try {
    const updatedAuctionProperty = await auctionPropertyService.updateAuctionProperty(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: updatedAuctionProperty,
    });
  } catch (error) {
    next(error);
  }
};

// Delete auction property by ID
exports.deleteAuctionProperty = async (req, res, next) => {
  try {
    await auctionPropertyService.deleteAuctionProperty(req.params.id);
    res.status(200).json({ message: 'Auction property deleted successfully' });
  } catch (error) {
    next(error);
  }
};
