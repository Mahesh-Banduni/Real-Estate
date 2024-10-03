const mongoose = require('mongoose');

// Locality Model
const LocalitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() // Capitalize before storing
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City', // Reference to City model
    required: true
  },
  postalCode: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
});

// Index on cityId for faster locality searches by city
LocalitySchema.index({ cityId: 1 });

const Locality = mongoose.model('Locality', LocalitySchema);

module.exports = Locality;