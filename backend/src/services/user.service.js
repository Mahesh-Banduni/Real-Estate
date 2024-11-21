const User = require("../models/user.model.js");
const Property = require("../models/property.model.js");
const userProfile = require("../models/user.profile.model.js");
const {
  ConflictError,
  NotFoundError,
  BadRequestError,
} = require("../errors/errors.js");
const { sendOTP, verifyOTP } = require("../utils/otp.service.js");
const JWTToken = require("../utils/token.generation.service.js");
const hashValue = require("../utils/hashing.service.js");
const { encrypt, decrypt } = require("../utils/encryption.decryption.utils.js");
const logger = require("../configs/winston.config.js");
const dotenv = require("dotenv");

dotenv.config();

// Create a new user
const createUser = async (userData) => {
  const ccode = "91";
  const phone = ccode.concat(userData.phone);

  const existingUser = await User.findOne({ phone });
  if (existingUser) {
    throw new ConflictError("User with this phone number already exists");
  }

  const password = hashValue.hash(userData.password);

  const user = new User();
  user.name = userData.name;
  user.phone = phone;
  user.role = "User";
  user.password = password;
  user.isVerified = true;

  await user.save();
  //const token = JWTToken.generateToken(user);

  const response = await sendOTP(user.phone);

  return { response, user }; // Return both user and token
};

const getAllUsers = async () => {
  const users = await User.find()
    .populate({
      path: "ownedProperties",
      model: "Property",
    })
    .populate("profile", "email")
    .exec();
  const encryptedResponse = encrypt(
    JSON.stringify(users),
    process.env.ENCRYPTION_KEY
  );
  const encrypteResponse = encrypt(
    JSON.stringify("Gotcha"),
    process.env.ENCRYPTION_KEY
  );
  //logger.info(encrypteResponse.encryptedData);
  logger.error("error");
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId)
    .populate({
      path: "ownedProperties",
      model: "Property",
    })
    .populate("profile", "email")
    .exec();
  if (!user) {
    throw new NotFoundError("User not found");
  }
  return user;
};

// Update user's name only
const updateUser = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  // if (updateData.name) {
  //   user.name = updateData.name; // Only update the name field
  // } else {
  //   throw new BadRequestError('Name is required to update');
  // }
  const ccode = "91";
  const phone = ccode.concat(updateData.phone);

  // const existingUser = await User.findOne({ phone });
  // if (existingUser) {
  //   throw new ConflictError("User with this phone number already exists");
  // }

  const password = hashValue.hash(userData.password);

  user.phone = phone;
  user.password = password;

  await user.save();

  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  return user;
};

const changePassword = async (userId, passwordData) => {
  // Fetch the user by userId
  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  // Hash the provided old password and compare it with the stored hashed password
  const hashedOldPassword = hash(passwordData.oldPassword);
  if (hashedOldPassword !== user.password) {
    throw new BadRequestError("Old password is incorrect");
  }

  // Check if newPassword and confirmNewPassword are the same
  if (passwordData.newPassword !== user.password) {
    throw new BadRequestError("New password should not match old password");
  }

  // Check if newPassword and confirmNewPassword are the same
  if (passwordData.newPassword !== passwordData.confirmNewPassword) {
    throw new BadRequestError("New passwords do not match");
  }

  // Hash the new password before saving it
  user.password = hash(passwordData.newPassword);

  // Save the updated user
  return await user.save();
};

const resetPassword = async (userId, newPassword, confirmNewPassword) => {
  // Fetch the user by userId
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  // newPassword= hash.newPassword;
  // console.log(hash(newPassword));
  // confirmNewPassword= hash.confirmNewPassword;

  if (newPassword == confirmNewPassword) {
    user.password = hashValue.hash(newPassword);
    await user.save();
  } else {
    throw new ConflictError(
      "New password and confirm new password should be same"
    );
  }

  const response = "Password has been reset successfully";
  return response;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  changePassword,
  resetPassword,
};
