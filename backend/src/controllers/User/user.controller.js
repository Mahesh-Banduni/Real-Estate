const userService = require('../../services/User/user.service');

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    const token= await user.generateAuthToken();
    res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly:true
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update user by ID
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete user by ID
const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Add a property to favorites
const addFavoriteProperty = async (req, res, next) => {
  try {
    const user = await userService.addFavoriteProperty(req.params.userId, req.params.propertyId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Remove a property from favorites
const removeFavoriteProperty = async (req, res, next) => {
  try {
    const user = await userService.removeFavoriteProperty(req.params.userId, req.params.propertyId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getOwnedProperties = async (req, res, next) => {
  try {
    const ownedProperties = await userService.getOwnedProperties(req.params.userId);
    res.status(200).json(ownedProperties);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFavoriteProperty,
  removeFavoriteProperty,
  getOwnedProperties,
};