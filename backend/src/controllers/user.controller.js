const userService = require('../services/user.service.js');
const auth = require("../middleware/auth.js");

// Create a new user
const createUser = async(req, res, next) => {
  try {
    const { response, user, token } = await userService.createUser(req.body);
    res.status(201).json({
        success: true,
        data: {response, user, token}
    });
  } catch (error) {
    next(error);
  }
};

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id,);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Update user by ID
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
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
    const user = await userService.addFavoriteProperty(req.body.userId, req.body.propertyId);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Remove a property from favorites
const removeFavoriteProperty = async (req, res, next) => {
  try {
    const user = await userService.removeFavoriteProperty(req.body.userId, req.body.propertyId);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const updatedUser = await userService.changePassword(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const response = await userService.resetPassword(req.params.id, req.body.newPassword, req.body.confirmNewPassword);
    res.status(200).json({
      success: true,
      data: response,
    });
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
  changePassword,
  resetPassword
};