const warehouseGodownService = require('../../services/Commercial/warehouse.godown.service');

// Create a new Warehouse/Godown
exports.createWarehouseGodown = async (req, res, next) => {
  try {
    const warehouseGodown = await warehouseGodownService.createWarehouseGodown(req.body);
    res.status(201).json(warehouseGodown);
  } catch (error) {
    next(error);
  }
};

// Get all Warehouses/Godowns
exports.getAllWarehouseGodowns = async (req, res, next) => {
  try {
    const warehouseGodowns = await warehouseGodownService.getAllWarehouseGodowns();
    res.status(200).json(warehouseGodowns);
  } catch (error) {
    next(error);
  }
};

// Get Warehouse/Godown by ID
exports.getWarehouseGodownById = async (req, res, next) => {
  try {
    const warehouseGodown = await warehouseGodownService.getWarehouseGodownById(req.params.id);
    res.status(200).json(warehouseGodown);
  } catch (error) {
    next(error);
  }
};

// Update Warehouse/Godown by ID
exports.updateWarehouseGodown = async (req, res, next) => {
  try {
    const updatedWarehouseGodown = await warehouseGodownService.updateWarehouseGodown(req.params.id, req.body);
    res.status(200).json(updatedWarehouseGodown);
  } catch (error) {
    next(error);
  }
};

// Delete Warehouse/Godown by ID
exports.deleteWarehouseGodown = async (req, res, next) => {
  try {
    await warehouseGodownService.deleteWarehouseGodown(req.params.id);
    res.status(200).json({ message: 'Warehouse/Godown deleted successfully' });
  } catch (error) {
    next(error);
  }
};
