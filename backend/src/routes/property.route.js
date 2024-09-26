const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/property.controller');

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
 *               - propertyType
 *               - expectedPrice
 *               - user
 *             properties:
 *               title:
 *                 type: string
 *                 description: Property title
 *               description:
 *                 type: string
 *                 description: Property description
 *               propertyType:
 *                 type: string
 *                 description: Property type (e.g., Plot/Land, Flat/Appartment)
 *               expectedPrice:
 *                 type: string
 *                 description: Property price
 *               user:
 *                 type: string
 *                 description: User ID associated with the property
 *               propertyPurpose:
 *                 type: string
 *                 description: Purpose of the property
 *               city:
 *                 type: string
 *                 description: City of the property
 *               locality:
 *                 type: string
 *                 description: Locality of the property
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

/**
 * @swagger
 * /properties/{id}/handpicked:
 *   patch:
 *     summary: Mark a property as handpicked
 *     description: Mark a specific property as handpicked (admin only)
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
 *         description: Property marked as handpicked
 *       400:
 *         description: Only admins can mark properties as handpicked
 */
router.patch('/:id/handpicked', propertyController.markHandpickedProperty);

module.exports = router;