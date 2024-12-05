const UserProfile = require('../models/user.profile.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const {uploadImages, uploadImage} = require('../utils/upload.image.service.js');
const User = require('../models/user.model.js');

// Create a new userProfile
const createUserProfile = async (userProfileData, file) => {
  const { email} = userProfileData;

  const existingUserProfile = await UserProfile.findOne({ email });
  if (existingUserProfile) {
    throw new ConflictError('User with this email already exists');
  }
  const imageURL = await uploadImage(file);

  const userProfile = new UserProfile();
  userProfile.user=userProfileData.user;
  userProfile.email= userProfileData.email;
  userProfile.bio= userProfileData.bio;
  userProfile.area= userProfileData.area;
  userProfile.locality= userProfileData.locality;
  userProfile.city= userProfileData.city;
  userProfile.district= userProfileData.district;
  userProfile.state= userProfileData.state;
  userProfile.country= userProfileData.country;
  userProfile.postalCode= userProfileData.postalCode;
  userProfile.profilePicture= imageURL;

  await userProfile.save()

  await User.findByIdAndUpdate(
    userProfile.user, 
    { $push: { profile: userProfile._id } } // Add the property ID to ownedProperties
  );

  return userProfile;
};

const getAllUserProfiles = async () => {
  return await UserProfile.find().populate('user', 'name phone');
};

const getUserProfileById = async (userProfileId) => {
  const userProfile = await UserProfile.findById(userProfileId).populate('user', 'name phone');
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
