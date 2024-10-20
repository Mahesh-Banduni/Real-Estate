const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
const userLoginController = require('../controllers/user.login.controller.js');
const auth = require("../middleware/auth.js");

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: API for user registration
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       201:
 *         description: User created successfully
 *       409:
 *         description: Conflict error (phone number already exists)
 *       400:
 *         description: Bad request
 */
router.post('/register', userController.createUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     description: API for user login
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - password
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized (Invalid credentials)
 */
router.post('/login', userLoginController.loginUser);

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: User logout
 *     description: API for user logout
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post('/logout', userLoginController.logoutUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 */
router.get('/:id', userController.getUserById);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User's name
 *                   phone:
 *                     type: string
 *                     description: User's phone number
 *       500:
 *         description: Internal server error
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user by ID
 *     description: Update a user's information by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated user's name
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request (Name required)
 *       404:
 *         description: User not found
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/:id', userController.deleteUser);

/**
 * @swagger
 * /users/favorite-properties:
 *   post:
 *     summary: Add a property to user's favorites
 *     description: Adds a property to the user's favorite properties list
 *     tags:
 *       - Users
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *       - in: path
 *         name: propertyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property added to favorites successfully
 *       404:
 *         description: User or property not found
 *       500:
 *         description: Internal server error
 */
router.post('', userController.addFavoriteProperty);

/**
 * @swagger
 * /users/favorite-properties:
 *   delete:
 *     summary: Remove a property from user's favorites
 *     description: Removes a property from the user's favorite properties list
 *     tags:
 *       - Users
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *       - in: path
 *         name: propertyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property removed from favorites successfully
 *       404:
 *         description: User or property not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:userId/favorites/:propertyId', userController.removeFavoriteProperty);

/**
 * @swagger
 * /users/{id}/change-password:
 *   put:
 *     summary: Update User Password by ID
 *     description: Update a user's password by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Updated user's old password
 *               newPassword:
 *                 type: string
 *                 description: Updated user's new password
 *               confirmNewPassword:
 *                 type: string
 *                 description: Updated user's confirm new password
 *     responses:
 *       200:
 *         description: User password updated successfully
 *       400:
 *         description: Bad request (Password required)
 *       404:
 *         description: User not found
 */
router.put('/:id/change-password', userController.changePassword);

module.exports = router;
