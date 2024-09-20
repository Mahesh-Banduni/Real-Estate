const commercialShopService = require('../../services/Commercial/commercial.shop.service');

// Create a new Commercial Shop
exports.createCommercialShop = async (req, res, next) => {
  try {
    const commercialShop = await commercialShopService.createCommercialShop(req.body);
    res.status(201).json(commercialShop);
  } catch (error) {
    next(error);
  }
};

// Get all Commercial Shops
exports.getAllCommercialShops = async (req, res, next) => {
  try {
    const commercialShops = await commercialShopService.getAllCommercialShops();
    res.status(200).json(commercialShops);
  } catch (error) {
    next(error);
  }
};

// Get Commercial Shop by ID
exports.getCommercialShopById = async (req, res, next) => {
  try {
    const commercialShop = await commercialShopService.getCommercialShopById(req.params.id);
    res.status(200).json(commercialShop);
  } catch (error) {
    next(error);
  }
};

// Update Commercial Shop by ID
exports.updateCommercialShop = async (req, res, next) => {
  try {
    const updatedCommercialShop = await commercialShopService.updateCommercialShop(req.params.id, req.body);
    res.status(200).json(updatedCommercialShop);
  } catch (error) {
    next(error);
  }
};

// Delete Commercial Shop by ID
exports.deleteCommercialShop = async (req, res, next) => {
  try {
    await commercialShopService.deleteCommercialShop(req.params.id);
    res.status(200).json({ message: 'Commercial Shop deleted successfully' });
  } catch (error) {
    next(error);
  }
};
