const User = require('../models/user.model.js');
const Property = require('../models/property.model.js');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const JWTToken = require("./token.generation.service.js");
const crypto = require('crypto');
const dotenv = require("dotenv");

dotenv.config();

// Create a new user
const createUser = async (userData) => {
  const { phone } = userData;

  const existingUser = await User.findOne({ phone });
  if (existingUser) {
    throw new ConflictError('User with this phone number already exists');
  }

  const hashPassword=hashPassword(userData.password);
  
  const user = new User();
  user.name = userData.name;
  user.phone = userData.phone;
  user.role= userData.role;
  user.password = hashPassword;

  await user.save();

  // Generate JWT token after user creation
  const token = JWTToken.generateToken(user);

  return { user, token }; // Return both user and token
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).populate({
    path: 'ownedProperties',
    model: 'Property'
  });
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

// Update user's name only
const updateUser = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  if (updateData.name) {
    user.name = updateData.name; // Only update the name field
  } else {
    throw new BadRequestError('Name is required to update');
  }

  return await user.save();
};

const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

const hashPassword = (password) => {
  return crypto.createHash('sha256', process.env.JWT_SECRET)
    .update(password)
    .digest('hex');
};

// Change password function using sha256 hash
const changePassword = async (userId, passwordData) => {
  // Fetch the user by userId
  const user = await User.findById(userId);
  
  if (!user) {
    throw new NotFoundError('User not found');
  }

  // Hash the provided old password and compare it with the stored hashed password
  const hashedOldPassword = hashPassword(passwordData.oldPassword);
  if (hashedOldPassword !== user.password) {
    throw new BadRequestError('Old password is incorrect');
  }

  // Check if newPassword and confirmNewPassword are the same
  if (passwordData.newPassword !== user.password) {
    throw new BadRequestError('Old  passwords do not match');
  }

  // Check if newPassword and confirmNewPassword are the same
  if (passwordData.newPassword !== passwordData.confirmNewPassword) {
    throw new BadRequestError('New passwords do not match');
  }

  // Hash the new password before saving it
  user.password = hashPassword(passwordData.newPassword);

  // Save the updated user
  return await user.save();
};


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  changePassword
};
