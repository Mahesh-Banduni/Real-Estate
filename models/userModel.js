/*const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ["buyer", "seller", "admin"], required: true },
  profilePicture: { type: String },
  city: { type: String },
  bio: { type: String },
  dateCreated: { type: Date, default: Date.now },
  propertiesOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  favoriteProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        //match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    age: {
        type: Number,
        min: 18,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;


