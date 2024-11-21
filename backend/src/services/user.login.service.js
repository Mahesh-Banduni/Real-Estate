const User = require("../models/user.model.js");
const JWTToken = require("../utils/token.generation.service.js");
const { sendOTP, verifyOTP } = require("../utils/otp.service.js");
const hashValue = require("../utils/hashing.service.js");
const {
  ConflictError,
  NotFoundError,
  BadRequestError,
} = require("../errors/errors.js");
const crypto = require("crypto");

// Login a user and issue a JWT token
const loginUser = async (phoneNumber, password) => {
  const ccode = "91";
  //console.log(phoneNumber);
  const phone = ccode.concat(phoneNumber);
  const user = await User.findOne({ phone });
  //console.log(phone);

  if (!user) {
    throw new NotFoundError("No user exist with this phone number");
  }

  const hashPassword = hashValue.hash(password);

  // Check password is correct
  if (user.password !== hashPassword) {
    throw new BadRequestError("Incorrect password");
  }

  // Send OTP
  const response = await sendOTP(user.phone);
  //const token = JWTToken.generateToken(user);
  return { response };
};

const verifyLoginOTP = async (phoneNumber, otp) => {
  const ccode = "91";
  const phone = ccode.concat(phoneNumber);
  const response = await verifyOTP(phone, otp);
  const user = await User.findOne({ phone });
  // Generate JWT token after user creation

  if (response.success) {
    // Generate JWT token after user creation
    const user = await User.findOne({ phone });
    const token = JWTToken.generateToken(user);

    user.isVerified = true;
    await user.save();
    return { response, token, user };
  }

  return { response };
};

// Logout the user (just a placeholder, JWT is stateless)
const logoutUser = async (req) => {
  // Since JWT is stateless, logout is handled on the frontend
  // But we can invalidate the token by managing a blacklist on the server-side (if needed)
  return { message: "User logged out successfully" };
};

const forgetPassword = async (phoneNumber) => {
  // Fetch the user by userId
  const ccode = "91";
  const phone = ccode.concat(phoneNumber);

  const user = await User.findOne({ phone });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const response = await sendOTP(user.phone);

  return { response, user }; // Return both user and token
};

module.exports = {
  loginUser,
  verifyLoginOTP,
  logoutUser,
  forgetPassword,
};
