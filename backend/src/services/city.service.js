const City = require('../models/city.model.js');
const Locality = require('../models/locality.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js')

const createCityWithLocalities = async(cityName, stateName, localities)=> {
  const city = new City({
    name: cityName,
    state: stateName
  });
  
  await city.save(); // Save city and get the _id

  // Create and save localities associated with the city
  const localityPromises = localities.map(localityName => {
    const locality = new Locality({
      name: localityName,
      cityId: city._id // Associate the locality with the city
    });

    return locality.save(); // Save each locality
  });
  
  const savedLocalities = await Promise.all(localityPromises); // Wait for all localities to be saved

    // Update the city's localities field with saved localities' ids
    city.localities = savedLocalities.map(locality => locality._id);
    await city.save();
    
  return {
    city,
    localities: savedLocalities
  };
}

const searchCities = async (search) => {
  
      // Search for cities that match the partial input
      const cities = await City.find({
        name: { $regex: search, $options: 'i' } // Case-insensitive partial search
      }).limit(10).populate({
        path: 'localities', // This assumes the `City` model has a `localities` field that's an array of ObjectId references
        model: 'Locality',   // Populate with the Locality model
        select: 'name',      // Only select the name field of the localities
      }); // Limit the results to ensure performance
  
      // If no cities found, return empty array
      if (cities.length === 0) {
        throw new NotFoundError('No cities found');
      }
      return{cities
      }
    }

module.exports = {createCityWithLocalities,searchCities};