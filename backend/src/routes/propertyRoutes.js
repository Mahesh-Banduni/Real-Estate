const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

/**
 * @swagger
 * /properties:
 *   post:
 *     summary: Create a new property
 *     description: API to create a new property listing
 *     tags:
 *       - Properties
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - price
 *               - user
 *             properties:
 *               title:
 *                 type: string
 *                 description: Property title
 *               description:
 *                 type: string
 *                 description: Property description
 *               type:
 *                 type: string
 *                 description: Property type (e.g., Plot/Land, Flat/Appartment)
 *               price:
 *                 type: string
 *                 description: Property price
 *               user:
 *                 type: string
 *                 description: User ID associated with the property
 *               isAvailable:
 *                 type: boolean
 *                 description: Availability status of the property
 *     responses:
 *       201:
 *         description: Property created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', propertyController.createProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Get property by ID
 *     description: Retrieve a property by its ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property retrieved successfully
 *       404:
 *         description: Property not found
 */
router.get('/:id', propertyController.getPropertyById);

/**
 * @swagger
 * /properties:
 *   get:
 *     summary: Get all properties
 *     description: Retrieve a list of all property listings
 *     tags:
 *       - Properties
 *     responses:
 *       200:
 *         description: List of properties retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Property ID
 *                   title:
 *                     type: string
 *                     description: Property title
 *                   type:
 *                     type: string
 *                     description: Property type
 *                   price:
 *                     type: string
 *                     description: Property price
 *       500:
 *         description: Internal server error
 */
router.get('/', propertyController.getAllProperties);

/**
 * @swagger
 * /properties/{id}:
 *   put:
 *     summary: Update property by ID
 *     description: Update a property's information by its ID (only description, price, images, and isAvailable can be updated)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Updated property description
 *               price:
 *                 type: string
 *                 description: Updated property price
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of updated image URLs
 *               isAvailable:
 *                 type: boolean
 *                 description: Updated availability status of the property
 *     responses:
 *       200:
 *         description: Property updated successfully
 *       404:
 *         description: Property not found
 */
router.put('/:id', propertyController.updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     summary: Delete property by ID
 *     description: Delete a property listing by its ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
 *       404:
 *         description: Property not found
 */
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
