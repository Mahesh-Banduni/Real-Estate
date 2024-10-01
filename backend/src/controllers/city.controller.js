const cityService = require('../services/city.service.js');

// Create a new contact form
exports.createCityWithLocalities = async (req, res, next) => {
  try {
    const cityName=req.body.name;
    const stateName=req.body.state;
    const localities= req.body.localities;
    const cityLocality = await cityService.createCityWithLocalities(cityName, stateName, localities);
    res.status(201).json({
      success: true,
      data: cityLocality,
    });
  } catch (error) {
    next(error);
  }
};

exports.searchCitiesLocalities = async (req, res, next) => {
    try {
      const cityLocality = await cityService.searchCitiesLocalities(req.query.city, req.query.locality);
      res.status(201).json({
        success: true,
        data: cityLocality,
      });
    } catch (error) {
      next(error);
    }
  };
