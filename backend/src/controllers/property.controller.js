const propertyService = require("../services/property.service.js");
const logger = require("../configs/winston.config.js");

// Controller for creating a new Property
const createProperty = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const propertyData = req.body;
    const files = req.files;
    //console.log(req?.user);
    const property = await propertyService.createProperty(
      userId,
      propertyData,
      files
    );
    logger.info(
      "User ID:" +
        `${userId}` +
        " has posted property ID:" +
        `${property._id}` +
        " successfully"
    );
    return res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error) {
    //console.log(error);
    next(error);
  }
};

const propertyInquiry = async (req, res, next) => {
  try {
    const userId= req.user.id;
    const propertyId = req.body.propertyId;
    const propertyInquiryResponse = await propertyService.propertyInquiry(propertyId, userId);
    res.status(201).json({
      data: propertyInquiryResponse,
    });
  } catch (error) {
    next(error);
  }
};


// Controller for getting a Property by ID
const getPropertyById = async (req, res, next) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

// Controller for updating a Property by ID
const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await propertyService.updateProperty(
      req.params.id,
      req.body
    );
    logger.info(
      "User ID:" +
        `${updatedProperty.userId}` +
        " has updated property ID:" +
        `${req.params.id}` +
        " successfully"
    );
    res.status(200).json({
      success: true,
      data: updatedProperty.property,
    });
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a Property by ID
const deleteProperty = async (req, res, next) => {
  try {
    await propertyService.deleteProperty(req.params.id, req.user.id);
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has deleted property ID:" +
        `${req.params.id}` +
        " successfully"
    );
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    //console.log(error);
    next(error);
  }
};

const searchProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      propertyID: req.query.propertyID,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.searchProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const handpickedProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.handpickedProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const recommendedProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.recommendedProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const saleProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.saleProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const exchangeProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.exchangeProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const partnershipProperty = async (req, res, next) => {
  try {
    // Accessing query parameters for filtering
    const filters = {
      propertyPurpose: req.query.propertyPurpose,
      propertyType: req.query.propertyType,
      city: req.query.city,
      locality: req.query.locality,
      fromCity: req.query.fromCity,
      toCity: req.query.toCity,
      fromCityLocality: req.query.fromCityLocality,
      toCityLocality: req.query.toCityLocality,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      isHandpickedProperty: req.query.isHandpickedProperty,
      isRecommendedProperty: req.query.isRecommendedProperty,
      propertyStatus: req.query.propertyStatus,
    };

    // Access sorting parameters from the query
    const sortBy = req.query.sortBy; // price or dateListed
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1; // 'desc' for descending, 'asc' or default for ascending

    const properties = await propertyService.partnershipProperty(
      filters,
      sortBy,
      sortOrder
    );
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

const markHandpickedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.markHandpickedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has marked property ID:" +
        `${req.params.id}` +
        " as handpicked property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

const unmarkHandpickedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.unmarkHandpickedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has unmarked property ID:" +
        `${req.params.id}` +
        " as handpicked property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

const markApprovedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.markApprovedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has marked property ID:" +
        `${req.params.id}` +
        " as approved property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

const unmarkApprovedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.unmarkApprovedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has unmarked property ID:" +
        `${req.params.id}` +
        " as handpicked property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

const markRecommendedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.markRecommendedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has marked property ID:" +
        `${req.params.id}` +
        " as recommended property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

const unmarkRecommendedProperty = async (req, res, next) => {
  try {
    const property = await propertyService.unmarkRecommendedProperty(
      req.params.id,
      req.user.id
    );
    logger.info(
      "User ID:" +
        `${req.user.id}` +
        " has marked property ID:" +
        `${req.params.id}` +
        " as recommended property"
    );
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProperty,
  getPropertyById,
  propertyInquiry,
  updateProperty,
  deleteProperty,
  searchProperty,
  handpickedProperty,
  recommendedProperty,
  saleProperty,
  exchangeProperty,
  partnershipProperty,
  markHandpickedProperty,
  unmarkHandpickedProperty,
  markApprovedProperty,
  unmarkApprovedProperty,
  markRecommendedProperty,
  unmarkRecommendedProperty,
};
