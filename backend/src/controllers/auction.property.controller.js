const auctionPropertyService = require('../services/auction.property.service.js');

// Create a new auction property
const createAuctionProperty = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const auctionPropertyData = req.body;
    const auctionProperty = await auctionPropertyService.createAuctionProperty(userId, auctionPropertyData);
    logger.info("User ID:"+`${userId}`+" has posted auction property ID:"+`${auctionProperty._id}`+" successfully");
    res.status(201).json({
      success: true,
      data: auctionProperty,
    });
  } catch (error) {
    next(error);
  }
};

// Get all auction properties
const getAllAuctionProperties = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      city: req.query.city,
      propertyType: req.query.propertyType,
      reservePrice: req.query.reservePrice,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending
    const auctionProperties = await auctionPropertyService.getAllAuctionProperties(filters, sortBy, sortOrder);
    //console.log(auctionProperties);
    res.status(200).json({
      success: true,
      data: auctionProperties,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get auction property by ID
const getAuctionPropertyById = async (req, res, next) => {
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
const updateAuctionProperty = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const updatedAuctionProperty = await auctionPropertyService.updateAuctionProperty(userId, req.params.id, req.body);
    logger.info("User ID:"+`${userId}`+" has updated auction property ID:"+`${req.params.id}`+"successfully");
    res.status(200).json({
      success: true,
      data: updatedAuctionProperty,
    });
  } catch (error) {
    next(error);
  }
};

// Delete auction property by ID
const deleteAuctionProperty = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    await auctionPropertyService.deleteAuctionProperty(userId, req.params.id);
    logger.info("User ID:"+`${userId}`+" has deleted auction property ID:"+`${req.params.id}`+"successfully");
    res.status(200).json({ message: 'Auction property deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAuctionProperty,
  getAllAuctionProperties,
  getAuctionPropertyById,
  updateAuctionProperty,
  deleteAuctionProperty
};
