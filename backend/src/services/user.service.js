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

  const hashPassword=crypto.createHash('sha256', process.env.JWT_SECRET).update(userData.password).digest('hex');
  
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

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
