const mongoose = require('mongoose');

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: (name) => capitalizeFirstLetter(name), // Auto-capitalize before storing
  },
  state: {
    type: String,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  localities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Locality' }]
});

// Index on name for faster search queries
CitySchema.index({ name: 1 });

const City = mongoose.model('City', CitySchema);
module.exports = City;