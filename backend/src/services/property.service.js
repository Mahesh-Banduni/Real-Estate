const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const User = require('../models/user.model.js');
const Property = require('../models/property.model.js');
const userService = require('../services/user.service.js');
const residentialFlat = require('../models/model/residential.flat.model.js');
const residentialHouse = require('../models/model/residential.house.model.js');
const residentialPlot = require('../models/model/residential.plot.model.js');
const commercialOfficeSpace = require('../models/model/commercial.office.space.model.js');
const commercialShop = require('../models/model/commercial.shop.model.js');
const commercialShowroom = require('../models/model/commercial.showroom.model.js');
const commercialPlot = require('../models/model/commercial.plot.model.js');
const {uploadImages, deleteImages}= require('../utils/upload.image.service.js');
const {sendPropertyInquiryEmail}= require('../utils/email.service.utils.js');
const {encrypt, decrypt} = require("../utils/encryption.decryption.utils.js");

// // Upload images function for Cloudinary
// const uploadImages = async (files) => {

//   const uploadedImages = [];
//   for (const file of files) {
//     if (!file.buffer) {
//       console.error('File is empty or missing buffer:', file);
//       uploadedImages.push(null);
//       continue;
//     }

//     try {
//       const result = await new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { resource_type: 'image',upload_preset: 'righttimeproperty'}, 
//           (error, result) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(result.secure_url);
//             }
//           }
//         );

//         // Pipe the buffer into Cloudinary
//         uploadStream.end(file.buffer);
//       });

//       uploadedImages.push(result);
//     } catch (error) {
//       console.error('Image upload failed:', error);
//       uploadedImages.push(null);
//     }
//   }

//   return uploadedImages;
// };

// // Create a new Property
// const createProperty = async (propertyData, files) => {
//   function generatePropertyId() {
//     let id;
//     do {
//       id = Math.floor(100000000 + Math.random() * 900000000);
//     } while (id % 10 === 0);
//     return id;
//   }  
//   const propertyId = generatePropertyId();
//   const imageUrls = await uploadImages(files);
//   const property = new Property();

//   // Assigning data to property fields
//   property.productID = propertyId;
//   property.description = propertyData.description;
//   property.propertyPurpose = propertyData.propertyPurpose;
//   property.propertyType = propertyData.propertyType;
//   property.user = propertyData.user;
//   property.numberOfFlatsInSociety = propertyData.numberOfFlatsInSociety;
//   property.city = propertyData.city;
//   property.locality = propertyData.locality;
//   property.projectSocietyName = propertyData.projectSocietyName;
//   property.address = propertyData.address;
//   property.buildingComplexName = propertyData.buildingComplexName;
//   property.projectMarketName= propertyData.projectMarketName;
//   property.landZone = propertyData.landZone;
//   property.fromCity = propertyData.fromCity;
//   property.toCity = propertyData.toCity;
//   property.idealForBusinesses = propertyData.idealForBusinesses;
//   property.nearbyBusinesses = propertyData.nearbyBusinesses;
//   property.floorsAllowed = propertyData.floorsAllowed;
//   property.openSides = propertyData.openSides;
//   property.facingRoadWidth = propertyData.facingRoadWidth;
//   property.facingRoadWidthUnit = propertyData.facingRoadWidthUnit;
//   property.boundaryWall = propertyData.boundaryWall;
//   property.gatedColony = propertyData.gatedColony;
//   property.bedrooms = propertyData.bedrooms;
//   property.balconies = propertyData.balconies;
//   property.bathrooms = propertyData.bathrooms;
//   property.floorNumber = propertyData.floorNumber;
//   property.totalFloor = propertyData.totalFloor;
//   property.furnished = propertyData.furnished;
//   property.personalWashroom = propertyData.personalWashroom;
//   property.pantryCafeteria = propertyData.pantryCafeteria;
//   property.cornerShop = propertyData.cornerShop;
//   property.mainRoadFacing = propertyData.mainRoadFacing;
//   property.anyConstructionDone = propertyData.anyConstructionDone;
//   property.BHKType = propertyData.BHKType;
//   property.flooring = propertyData.flooring;
//   property.plotArea = propertyData.plotArea;
//   property.plotAreaUnit = propertyData.plotAreaUnit;
//   property.lengthdimension = propertyData.lengthdimension;
//   property.widthdimension = propertyData.widthdimension;
//   property.dimensionUnit = propertyData.dimensionUnit;
//   property.cornerPlot = propertyData.cornerPlot;
//   property.coveredArea = propertyData.coveredArea;
//   property.carpetArea = propertyData.carpetArea;
//   property.superArea = propertyData.superArea;
//   property.carpetAreaUnit = propertyData.carpetAreaUnit;
//   property.superAreaUnit = propertyData.superAreaUnit;
//   property.coveredAreaUnit= propertyData.coveredAreaUnit;
//   property.entranceWidth = propertyData.entranceWidth;
//   property.entranceWidthUnit = propertyData.entranceWidthUnit;
//   property.ownership = propertyData.ownership;
//   property.transactionType = propertyData.transactionType;
//   property.possessionStatus = propertyData.possessionStatus;
//   property.currentlyLeasedOut = propertyData.currentlyLeasedOut;
//   property.expectedPrice = propertyData.expectedPrice;
//   property.bookingAmount = propertyData.bookingAmount;
//   property.priceNegotiable = propertyData.priceNegotiable;
//   property.residentialAmenities = propertyData.residentialAmenities;
//   property.commercialAmenities = propertyData.commercialAmenities;
//   property.landAmenities = propertyData.landAmenities;
//   property.locationAdvantages = propertyData.locationAdvantages;
//   property.overlooking = propertyData.overlooking;
//   property.facing = propertyData.facing;
//   property.images = imageUrls;

//   return await property.save();
// };


// Create a new Property
const createProperty = async (userId, propertyData, files) => {

  let propertyNew;
  try{
    function generatePropertyId() {
      let id;
      do {
        id = Math.floor(100000000 + Math.random() * 900000000);
      } while (id % 10 === 0);
      return id;
    }   

    switch (propertyData.propertyType) {
      case 'Residential Flat/Apartment':
        propertyNew = new residentialFlat(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Residential House':
        propertyNew = new residentialHouse(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Residential Plot/Land':
        propertyNew = new residentialPlot(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Commercial Office Space':
        propertyNew = new commercialOfficeSpace(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Commercial Shop':
        propertyNew = new commercialShop(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Commercial Showroom':
        propertyNew = new commercialShowroom(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;
      case 'Commercial Plot/Land':
        propertyNew = new commercialPlot(propertyData);
        propertyNew.propertyType=propertyData.propertyType;
        propertyNew.user= userId;
        propertyNew.images=await uploadImages(files);
        propertyNew.propertyID = generatePropertyId();;
        break;         
      default:
        throw new Error('Invalid property type');
    }
    
    await propertyNew.save();
  
    await User.findByIdAndUpdate(
      userId, 
      { $push: { ownedProperties: propertyNew._id } } // Add the property ID to ownedProperties
    );
  }

  catch(error)
  {
    next(error);
  }

  return propertyNew;
};

const propertyInquiry = async (propertyId, userId) => {
  const propertyDetails = await Property.findById(propertyId).populate('user', '_id name phone email');
  if (!propertyDetails) {
    throw new NotFoundError('Property not found');
  }
  const user = await User.findById(userId);
  const userDetails={};
  userDetails.queryUsername=user.name;
  userDetails.queryUseremail=user.email;
  userDetails.queryUserphone = user.phone;

  const response = await sendPropertyInquiryEmail(propertyDetails, userDetails);

  return response;
}

const searchProperty = async (filters, sortBy, sortOrder) => {
  const query = {};

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.propertyID) query.propertyID = filters.propertyID;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();
  
  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  // const filteredPropertiesResponse = encrypt(JSON.stringify(filteredProperties), process.env.ENCRYPTION_KEY);
  // return filteredPropertiesResponse;
  return filteredProperties;
};

const handpickedProperty = async (filters, sortBy, sortOrder) => {
  const query = { isHandpickedProperty: 'Yes' };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();

  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

const recommendedProperty = async (filters, sortBy, sortOrder) => {
  const query = { isRecommendedProperty: 'Yes' };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();

  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

const saleProperty = async (filters, sortBy, sortOrder) => {
  const query = { propertyPurpose: 'Sale' };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();

  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

const partnershipProperty = async (filters, sortBy, sortOrder) => {
  const query = { propertyPurpose: 'Partnership' };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();

  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

const exchangeProperty = async (filters, sortBy, sortOrder) => {
  const query = { propertyPurpose: 'Exchange' };

  // Apply filters
  if (filters.propertyPurpose) query.propertyPurpose = filters.propertyPurpose;
  if (filters.propertyType) query.propertyType = filters.propertyType;
  if (filters.city) query.city = filters.city;
  if (filters.locality) query.locality = filters.locality;
  if (filters.ownership) query.ownership = filters.ownership;
  if (filters.fromCity) query.fromCity = filters.fromCity;
  if (filters.toCity) query.toCity = filters.toCity;
  if (filters.fromCityLocality) query.fromCityLocality = filters.fromCityLocality;
  if (filters.toCityLocality) query.toCityLocality = filters.toCityLocality;
  if (filters.isHandpickedProperty) query.isHandpickedProperty = filters.isHandpickedProperty;
  if (filters.isRecommendedProperty) query.isRecommendedProperty = filters.isRecommendedProperty;
  if (filters.propertyStatus) query.propertyStatus = filters.propertyStatus;


  // Budget filter (minPrice and maxPrice)
  if (filters.minPrice || filters.maxPrice) {
    query.expectedPrice = {};
    if (filters.minPrice) query.expectedPrice.$gte = filters.minPrice;
    if (filters.maxPrice) query.expectedPrice.$lte = filters.maxPrice;
  }

  // Define sorting
  let sortCriteria = {};
  if (sortBy === 'price') {
    sortCriteria.expectedPrice = sortOrder; // 1 for ascending, -1 for descending
  } else if (sortBy === 'dateListed') {
      sortCriteria.dateListed = sortOrder; // 1 for ascending, -1 for descending (most recent first)
  }
  
  // Query database with filters and sorting
  const filteredProperties = await Property.find(query).sort(sortCriteria).select('-user').exec();

  if (!filteredProperties || filteredProperties.length === 0) {
    throw new NotFoundError('No properties found matching the criteria.');
  }
  return filteredProperties;
};

// Get Property by ID
const getPropertyById = async (propertyId) => {
  const property = await Property.findById(propertyId).populate('user', '_id name phone email');
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  return property;
};

// Update Property by ID
const updateProperty = async (propertyId, updateData) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }
  const userId=updateData.user;

  // Only allow updating specific fields
  const allowedUpdates = [
    'description', 'propertyType','images', 'numberOfFlatsInSociety', 'city', 'locality',
   'projectSocietyName', 'address', 'buildingComplexName', 'landZone', 'fromCity', 'toCity',
    'idealForBusinesses', 'nearbyBusinesses', 'floorsAllowed', 'openSides', 'facingRoadWidth', 'boundaryWall',
    'gatedColony', 'bedrooms', 'balconies', 'bathrooms', 'floorNumber', 'totalFloor', 'furnished',
    'personalWashroom', 'pantryCafeteria', 'cornerShop', 'mainRoadFacing', 'anyConstructionDone', 'BHKType',
    'flooring', 'plotArea', 'plotAreaUnit', 'lengthdimension', 'widthdimension','dimensionUnit','facingRoadWidthUnit', 'cornerPlot', 'coveredArea',
    'carpetArea', 'superArea', 'carpetAreaUnit', 'superAreaUnit', 'coveredAreaUnit', 'entranceWidth', 'entranceWidthUnit',
    'ownership', 'transactionType', 'possessionStatus', 'currentlyLeasedOut', 'expectedPrice', 'bookingAmount','projectMarketName',
    'priceNegotiable', 'taxAndGovtChargesExcluded', 'allInclusivePrice', 'additionalRooms', 'residentialAmenities',
    'commercialAmenities', 'landAmenities', 'locationAdvantages', 'overlooking', 'facing',
  ];

  allowedUpdates.forEach((field) => {
    if (updateData[field] !== undefined) {
      property[field] = updateData[field];
    }
  });

  await property.save();
  return {property,userId};
};

// Delete Property by ID
const deleteProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can delete a property.');
  }
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  // Delete associated images from Cloudinary
  if (property.images && property.images.length > 0) {
    //console.log(property.images.length);
    await deleteImages(property.images);
  }
  //console.log(property.images);

  await Property.findByIdAndDelete(propertyId);

  return property;
};

// Mark Property by Admin
const markHandpickedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can mark properties as handpicked.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isHandpickedProperty = true;
  return await property.save();
};

// Unmark Property by Admin
const unmarkHandpickedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can unmark properties as handpicked.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isHandpickedProperty = false;
  return await property.save();
};

// Mark Property as Approved by Admin
const markApprovedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can mark properties as approved.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.propertyStatus = "Approved";
  return await property.save();
};

// Unmark Property as Approved by Admin
const unmarkApprovedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can unmark properties as handpicked.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.propertyStatus = "Approval Pending";
  return await property.save();
};

// Mark Property as Recommended by Admin
const markRecommendedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  // Ensure the user has the 'admin' role
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can mark properties as recommended.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isRecommendedProperty = true;
  return await property.save();
};

// Unmark Property as Recommended by Admin
const unmarkRecommendedProperty = async (propertyId, userId) => {
  const user = await userService.getUserById(userId);
  if (user.role !== 'Admin') {
    throw new BadRequestError('Only admins can unmark properties as recommended.');
  }

  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  property.isRecommendedProperty = false;
  return await property.save();
};

// Add a property to favorites
const addFavoriteProperty = async (userId, propertyId) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  // Check if the property already exists in favorites
  if (user.favoriteProperties.includes(propertyId)) {
    return { message: 'Property already in favorites' };
  }

  user.favoriteProperties.push(propertyId);
  return await user.save();
};

// Remove a property from favorites
const removeFavoriteProperty = async (userId, propertyId) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new NotFoundError('Property not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  // Check if the property is not in favorites
  if (!user.favoriteProperties.includes(propertyId)) {
    return { message: 'Property not in favorites' };
  }

  // Filter out the property from favoriteProperties
  user.favoriteProperties = user.favoriteProperties.filter(
    (id) => id.toString() !== propertyId.toString()
  );
  return await user.save();
};

module.exports = {
  createProperty,
  searchProperty,
  handpickedProperty,
  recommendedProperty,
  saleProperty,
  partnershipProperty,
  exchangeProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
  markHandpickedProperty,
  unmarkHandpickedProperty,
  markApprovedProperty,
  unmarkApprovedProperty,
  markRecommendedProperty,
  unmarkRecommendedProperty,
  addFavoriteProperty,
  removeFavoriteProperty,
  propertyInquiry,
};