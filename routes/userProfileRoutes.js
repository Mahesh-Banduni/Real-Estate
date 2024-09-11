const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

/**
 * @swagger
 * /userProfiles/register:
 *   post:
 *     summary: Register a new user profile
 *     description: API for user profile registration
 *     tags:
 *       - User Profiles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - bio
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User's userId
 *               email:
 *                 type: string
 *                 description: User's email
 *               bio:
 *                 type: string
 *                 description: User's bio
 *               area:
 *                 type: string
 *                 description: User's area
 *               role:
 *                 type: string
 *                 description: User's role
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
 *         description: User profile created successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', userProfileController.createUserProfile);

/**
 * @swagger
 * /userProfiles/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     description: Retrieve a user profile by their ID
 *     tags:
 *       - User Profiles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User profile not found
 */
router.get('/:id', userProfileController.getUserProfileById);

/**
 * @swagger
 * /userProfiles:
 *   get:
 *     summary: Get all user profiles
 *     description: Retrieve a list of all user profiles
 *     tags:
 *       - User Profiles
 *     responses:
 *       200:
 *         description: List of user profiles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: User profile ID
 *                   email:
 *                     type: string
 *                     description: User's email
 *                   bio:
 *                     type: string
 *                     description: User's bio
 *       500:
 *         description: Internal server error
 */
router.get('/', userProfileController.getAllUserProfiles);

/**
 * @swagger
 * /userProfiles/{id}:
 *   put:
 *     summary: Update user profile by ID
 *     description: Update a user profile's information by their ID
 *     tags:
 *       - User Profiles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bio:
 *                 type: string
 *                 description: Updated user's bio
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
 *         description: User profile updated successfully
 *       404:
 *         description: User profile not found
 */
router.put('/:id', userProfileController.updateUserProfile);

/**
 * @swagger
 * /userProfiles/{id}:
 *   delete:
 *     summary: Delete user profile by ID
 *     description: Delete a user profile by their ID
 *     tags:
 *       - User Profiles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
 *     responses:
 *       200:
 *         description: User profile deleted successfully
 *       404:
 *         description: User profile not found
 */
router.delete('/:id', userProfileController.deleteUserProfile);

module.exports = router;
