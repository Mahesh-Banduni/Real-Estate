const userLoginService = require('../services/user.login.service.js');

// Login a user
const loginUser = async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      const { user, token } = await userLoginService.loginUser(phone, password);
      
      // Send back the user data and the token
      res.status(200).json({
          success: true,
          data: {user, token}
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
  
module.exports = {
    loginUser,
    logoutUser
}