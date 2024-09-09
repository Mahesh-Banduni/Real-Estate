const User = require('../models/User');
const Address = require('../models/Address'); // Assuming Address model exists
const Property = require('../models/Property'); // Assuming Property model exists
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors');

// Create a new user
const createUser = async (userData) => {
  const { email} = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ConflictError('User with this email already exists');
  }

  const user = new User();
  user.name= userData.name;
  user.email= userData.email;
  user.password= userData.password;
  user.phone= userData.phone;
  user.bio= userData.bio;
  
  const address = new Address();
  address.area= userData.area;
  address.locality= userData.locality;
  address.city= userData.city;
  address.district= userData.district;
  address.state= userData.state;
  address.country= userData.country;
  address.postalCode= userData.postalCode;

  return await user.save() && address.save();
};

const getAllUsers = async () => {
  return await User.find().populate('address propertiesOwned favoriteProperties');
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).populate('address propertiesOwned favoriteProperties');
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

const updateUser = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError('User not found');
  }

  if (updateData.address) {
    const existingAddress = await Address.findById(updateData.address);
    if (!existingAddress) {
      throw new NotFoundError('Address not found');
    }
  }

  Object.assign(user, updateData);
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
