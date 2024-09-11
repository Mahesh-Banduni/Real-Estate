const UserProfile = require('../models/UserProfile');
const Property = require('../models/Property'); // Assuming Property model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors');

// Create a new userProfile
const createUserProfile = async (userProfileData) => {
  const { email} = userProfileData;

  const existingUserProfile = await UserProfile.findOne({ email });
  if (existingUserProfile) {
    throw new ConflictError('User with this email already exists');
  }

  const userProfile = new UserProfile();
  userProfile.userId=userProfileData.userId;
  userProfile.email= userProfileData.email;
  userProfile.bio= userProfileData.bio;
  userProfile.area= userProfileData.area;
  userProfile.role= userProfileData.role;
  userProfile.locality= userProfileData.locality;
  userProfile.city= userProfileData.city;
  userProfile.district= userProfileData.district;
  userProfile.state= userProfileData.state;
  userProfile.country= userProfileData.country;
  userProfile.postalCode= userProfileData.postalCode;

  return await userProfile.save();
};

const getAllUserProfiles = async () => {
  return await UserProfile.find().populate('propertiesOwned favoriteProperties');
};

const getUserProfileById = async (userProfileId) => {
  const userProfile = await UserProfile.findById(userProfileId).populate('propertiesOwned favoriteProperties');
  if (!userProfile) {
    throw new NotFoundError('User Profile not found');
  }
  return userProfile;
};

const updateUserProfile = async (userProfileId, updateData) => {
  const userProfile = await UserProfile.findById(userProfileId);
  if (!userProfile) {
    throw new NotFoundError('User Profile not found');
  }

  // Only allow updating specific fields
  const allowedUpdates = ['bio', 'area', 'locality', 'city', 'district', 'state', 'country', 'postalCode'];
  allowedUpdates.forEach(field => {
    if (updateData[field] !== undefined) {
      userProfile[field] = updateData[field];
    }
  });

  return await userProfile.save();
};

const deleteUserProfile = async (userProfileId) => {
  const userProfile = await UserProfile.findByIdAndDelete(userProfileId);
  if (!userProfile) {
    throw new NotFoundError('User not found');
  }

  return userProfile;
};

module.exports = {
  createUserProfile,
  getAllUserProfiles,
  getUserProfileById,
  updateUserProfile,
  deleteUserProfile,
};
