const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String},
  password: {
        type: String,
        required: true,
        minlength: 6,
  },
  isVerified: { type: Boolean, default: false},
  role: {type: String, enum: ["User","Agent","Admin"], default: 'User'},
  phone: { type: String, required: true, minlength: 12, maxlength: 12 },
  favoriteProperties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
  }],
  ownedProperties: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Property" 
  }]
},{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;