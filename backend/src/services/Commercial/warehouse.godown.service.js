const WarehouseGodown = require('../../models/warehouse.godown.model');
const { ConflictError, NotFoundError, BadRequestError } = require('../../errors/errors');

// Create a new Warehouse/Godown
const createWarehouseGodown = async (godownData) => {
  const warehouseGodown = new WarehouseGodown();

  // Assigning data to warehouse/godown fields
  warehouseGodown.city = godownData.city;
  warehouseGodown.locality = godownData.locality;
  warehouseGodown.Address = godownData.Address;
  warehouseGodown.landZone = godownData.landZone;
  warehouseGodown.floorNumber = godownData.floorNumber;
  warehouseGodown.totalFloor = godownData.totalFloor;
  warehouseGodown.furnished = godownData.furnished;
  warehouseGodown.floorsAllowed = godownData.floorsAllowed;
  warehouseGodown.openSides = godownData.openSides;
  warehouseGodown.facingRoadWidth = godownData.facingRoadWidth;
  warehouseGodown.superArea = godownData.superArea;
  warehouseGodown.areaUnit = godownData.areaUnit;
  warehouseGodown.possessionStatus = godownData.possessionStatus;
  warehouseGodown.availableFromMonth = godownData.availableFromMonth;
  warehouseGodown.availableFromYear = godownData.availableFromYear;
  warehouseGodown.constructionAge = godownData.constructionAge;
  warehouseGodown.currentlyLeasedOut = godownData.currentlyLeasedOut;
  warehouseGodown.expectedPrice = godownData.expectedPrice;
  warehouseGodown.bookingAmount = godownData.bookingAmount;
  warehouseGodown.priceNegotiable = godownData.priceNegotiable;
  warehouseGodown.ownership = godownData.ownership;
  warehouseGodown.transactionType = godownData.transactionType;
  warehouseGodown.overlooking = godownData.overlooking;
  warehouseGodown.facing = godownData.facing;
  warehouseGodown.additionalRooms = godownData.additionalRooms;
  warehouseGodown.amenities = godownData.amenities;

  return await warehouseGodown.save();
};

// Get all Warehouses/Godowns
const getAllWarehouseGodowns = async () => {
  return await WarehouseGodown.find();
};

// Get Warehouse/Godown by ID
const getWarehouseGodownById = async (godownId) => {
  const warehouseGodown = await WarehouseGodown.findById(godownId);
  if (!warehouseGodown) {
    throw new NotFoundError('Warehouse/Godown not found');
  }
  return warehouseGodown;
};

// Update Warehouse/Godown by ID
const updateWarehouseGodown = async (godownId, updateData) => {
  const warehouseGodown = await WarehouseGodown.findById(godownId);
  if (!warehouseGodown) {
    throw new NotFoundError('Warehouse/Godown not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = [
    'city', 'locality', 'Address', 'landZone', 'floorNumber', 'totalFloor',
    'furnished', 'floorsAllowed', 'openSides', 'facingRoadWidth', 'superArea',
    'areaUnit', 'possessionStatus', 'availableFromMonth', 'availableFromYear',
    'constructionAge', 'currentlyLeasedOut', 'expectedPrice', 'bookingAmount',
    'priceNegotiable', 'ownership', 'transactionType', 'overlooking', 'facing',
    'additionalRooms', 'amenities'
  ];

  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      warehouseGodown[field] = updateData[field];
    }
  });

  return await warehouseGodown.save();
};

// Delete Warehouse/Godown by ID
const deleteWarehouseGodown = async (godownId) => {
  const warehouseGodown = await WarehouseGodown.findByIdAndDelete(godownId);
  if (!warehouseGodown) {
    throw new NotFoundError('Warehouse/Godown not found');
  }
  return warehouseGodown;
};

module.exports = {
  createWarehouseGodown,
  getAllWarehouseGodowns,
  getWarehouseGodownById,
  updateWarehouseGodown,
  deleteWarehouseGodown,
};
