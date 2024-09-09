const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

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
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               email:
 *                 type: string
 *                 description: User's email
 *               password:
 *                 type: string
 *                 description: User's password
 *               phone:
 *                 type: number
 *                 description: User's phone number
 *               area:
 *                 type: string
 *                 description: User's area
 *               locality:
 *                 type: string
 *                 description: User's locality
 *               city:
 *                 type: string
 *                 description: User's city
 *               district:
 *                 type: string
 *                 description: User's district
 *               state:
 *                 type: string
 *                 description: User's state
 *               country:
 *                 type: string
 *                 description: User's country
 *               postalCode:
 *                 type: string
 *                 description: User's postal code
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', userController.createUser);

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
 *         required: true
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
 *                   email:
 *                     type: string
 *                     description: User's email
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
 *               email:
 *                 type: string
 *                 description: Updated user's email
 *               phone:
 *                 type: string
 *                 description: Updated user's phone number
 *               area:
 *                 type: string
 *                 description: Updated user's area
 *               locality:
 *                 type: string
 *                 description: Updated user's locality
 *               city:
 *                 type: string
 *                 description: Updated user's city
 *               district:
 *                 type: string
 *                 description: Updated user's district
 *               state:
 *                 type: string
 *                 description: Updated user's state
 *               country:
 *                 type: string
 *                 description: Updated user's country
 *               postalCode:
 *                 type: string
 *                 description: Updated user's postal code
 *     responses:
 *       200:
 *         description: User updated successfully
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

module.exports = router;
