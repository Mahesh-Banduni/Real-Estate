const mongoose= require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  profilePicture: { type: String },
  bio: { type: String },
  propertiesOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  favoriteProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
  address: { type: String},
  locality: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  });

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
module.exports = UserProfile;
