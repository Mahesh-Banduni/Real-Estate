const userLoginService = require("../services/user.login.service.js");

// Login a user
const loginUser = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    const { response } = await userLoginService.loginUser(
      phoneNumber,
      password
    );
    console.log({ response });

    // Send back the user data and the token
    res.status(200).json({
      success: true,
      data: { response },
    });
  } catch (error) {
    next(error);
  }
};

const verifyLoginOTP = async (req, res, next) => {
  try {
    const { phoneNumber, otp } = req.body;
    const { response, token, user } = await userLoginService.verifyLoginOTP(
      phoneNumber,
      otp
    );
    res.status(200).json({
      success: true,
      data: { response, token, user },
    });
  } catch (error) {
    next(error);
  }
};

// Logout a user
const logoutUser = async (req, res, next) => {
  try {
    const result = await userLoginService.logoutUser(req); // Usually handled on the frontend
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const { response, user } = await userLoginService.forgetPassword(
      req.body.phoneNumber
    );
    res.status(200).json({
      success: true,
      data: { response, user },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  verifyLoginOTP,
  logoutUser,
  forgetPassword,
};
