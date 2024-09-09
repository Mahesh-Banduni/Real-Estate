const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String},
  email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
  },
  password: {
        type: String,
        required: true,
        minlength: 6,
  },
  phone: { type: String },
  profilePicture: { type: String },
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address"},
  bio: { type: String },
  propertiesOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  favoriteProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;


