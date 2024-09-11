const mongoose= require("mongoose");
const UserProfileSchema = new mongoose.Schema({
  userId: {
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
  role: {type: String, enum: ["User","Agent","Admin"], default: "User"},
  profilePicture: { type: String },
  bio: { type: String },
  propertiesOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  favoriteProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
  area: { type: String, required: true },
  locality: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
  });

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
module.exports = UserProfile;
