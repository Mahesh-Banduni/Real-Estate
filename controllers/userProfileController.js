const userProfileService = require('../services/userProfileService');

// Create a new user
exports.createUserProfile = async (req, res, next) => {
  try {
    const userProfile = await userProfileService.createUserProfile(req.body);
    res.status(201).json(userProfile);
  } catch (error) {
    next(error);
  }
};

// Get all users
exports.getAllUserProfiles = async (req, res, next) => {
  try {
    const userProfiles = await userProfileService.getAllUserProfiles();
    res.status(200).json(userProfiles);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
exports.getUserProfileById = async (req, res, next) => {
  try {
    const userProfile = await userProfileService.getUserProfileById(req.params.id);
    res.status(200).json(userProfile);
  } catch (error) {
    next(error);
  }
};

// Update user by ID
exports.updateUserProfile = async (req, res, next) => {
  try {
    const updateUserData = await userProfileService.updateUserProfile(req.params.id, req.body);
    res.status(200).json(updateUserData);
  } catch (error) {
    next(error);
  }
};

// Delete user by ID
exports.deleteUserProfile = async (req, res, next) => {
  try {
    await userProfileService.deleteUserProfile(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
