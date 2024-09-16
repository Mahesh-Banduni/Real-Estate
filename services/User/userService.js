const User = require('../models/User');
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors');

// Create a new user
const createUser = async (userData) => {
  const { phone } = userData;

  const existingUser = await User.findOne({ phone });
  if (existingUser) {
    throw new ConflictError('User with this phone number already exists');
  }

  const user = new User();
  user.name = userData.name;
  user.phone = userData.phone;
  user.password = userData.password;

  return await user.save();
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
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
  deleteUser,
};
