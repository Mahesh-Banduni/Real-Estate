const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String},
  password: {
        type: String,
        required: true,
        minlength: 6,
  },
  role: {type: String, enum: ["User","Agent","Admin"], default: 'User'},
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
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