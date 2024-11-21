const express = require('express');
const router = express.Router();
const userLoginController = require('../controllers/user.login.controller.js');
const { loginLimiter } = require('../middleware/rate.limitter.js');

/**
 * @swagger
 * /userauth/login:
 *   post:
 *     summary: User login
 *     description: API for user login
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - password
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: User's phone number
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Login done and verify otp in next step
 *       401:
 *         description: Unauthorized (Invalid credentials)
 */
router.post('/login',loginLimiter, userLoginController.loginUser);

/**
 * @swagger
 * /userauth/verify-otp:
 *   post:
 *     summary: OTP Verification
 *     description: API for OTP Verification
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - otp
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: Phone Number
 *               otp:
 *                 type: string
 *                 description: OTP Verification
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized (Invalid OTP)
 */
router.post('/verify-otp', userLoginController.verifyLoginOTP);

/**
 * @swagger
 * /userauth/logout:
 *   post:
 *     summary: User logout
 *     description: API for user logout
 *     tags:
 *       - User Authentication
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post('/logout', userLoginController.logoutUser);

/**
 * @swagger
 * /userauth/forget-password:
 *   post:
 *     summary: Forget User Password by ID
 *     description: Forget a user's password by their ID
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: User Phone Number
 *     responses:
 *       200:
 *         description: OTP sent to user successfully
 *       400:
 *         description: Bad request (Phone required)
 *       404:
 *         description: User not found
 */
router.post('/forget-password', userLoginController.forgetPassword);

module.exports = router;