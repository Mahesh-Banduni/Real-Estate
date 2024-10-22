const User = require('../models/user.model.js');
const JWTToken= require("./token.generation.service.js");
const { sendAndStoreOTP, verifyOTP }= require("./otp.service.js");
const { ConflictError, NotFoundError, BadRequestError } = require('../errors/errors.js');
const crypto = require('crypto');

// Login a user and issue a JWT token
const loginUser = async (phone, password) => {
  const user = await User.findOne({ phone });

  if(!user){
    throw new NotFoundError('No user exist with this phone number');
  }

  const hashPassword=crypto.createHash('sha256', process.env.JWT_SECRET).update(password).digest('hex');
  
  // Check password is correct
  if (user.password !== hashPassword) {
    throw new BadRequestError('Incorrect password');
  }

  // Generate JWT token
  const token = JWTToken.generateToken(user);

  // Send OTP and store it in Redis
  await sendAndStoreOTP(user._id, phone);

  return { message: 'OTP sent to phone. Please verify to log in', userId: user._id, user, token };

  //return { user, token }; // Return user and token
};

const verifyLoginOTP = async (userId, otp) => {
  const isValid = await verifyOTP(userId, otp);

  if (!isValid) {
    throw new Error('Invalid OTP or OTP has expired');
  }

  // Return user details after successful verification
  const user = await User.findById(userId);

  return { message: 'Login successful', user };
};

// Logout the user (just a placeholder, JWT is stateless)
const logoutUser = async (req) => {
  // Since JWT is stateless, logout is handled on the frontend
  // But we can invalidate the token by managing a blacklist on the server-side (if needed)
  return { message: "User logged out successfully" };
};

module.exports = {
  loginUser,
  verifyLoginOTP,
  logoutUser
};
