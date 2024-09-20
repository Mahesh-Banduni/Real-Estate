const express = require('express');
const router = express.Router();
const studioApartmentController = require('../../controllers/Residential/studio.apartment.controller');

/**
 * @swagger
 * /studio-apartments:
 *   post:
 *     summary: Create a new Studio Apartment
 *     description: API to create a new Studio Apartment
 *     tags:
 *       - Studio Apartments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - bedrooms
 *               - bathrooms
 *               - superArea
 *               - carpetArea
 *               - areaUnit
 *               - expectedPrice
 *               - status
 *               - ownership
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the studio apartment is located
 *               locality:
 *                 type: string
 *                 description: Locality of the studio apartment
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the studio apartment
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the studio apartment
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the studio apartment
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold"]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *     responses:
 *       201:
 *         description: Studio Apartment created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', studioApartmentController.createStudioApartment);

/**
 * @swagger
 * /studio-apartments:
 *   get:
 *     summary: Get all Studio Apartments
 *     description: Retrieve a list of all Studio Apartments
 *     tags:
 *       - Studio Apartments
 *     responses:
 *       200:
 *         description: List of studio apartments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Studio Apartment ID
 *                   city:
 *                     type: string
 *                     description: City where the studio apartment is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the studio apartment
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the studio apartment
 *       500:
 *         description: Internal server error
 */
router.get('/', studioApartmentController.getAllStudioApartments);

/**
 * @swagger
 * /studio-apartments/{id}:
 *   get:
 *     summary: Get Studio Apartment by ID
 *     description: Retrieve a Studio Apartment by its ID
 *     tags:
 *       - Studio Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Studio Apartment ID
 *     responses:
 *       200:
 *         description: Studio Apartment retrieved successfully
 *       404:
 *         description: Studio Apartment not found
 */
router.get('/:id', studioApartmentController.getStudioApartmentById);

/**
 * @swagger
 * /studio-apartments/{id}:
 *   put:
 *     summary: Update Studio Apartment by ID
 *     description: Update a Studio Apartment's information by its ID
 *     tags:
 *       - Studio Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Studio Apartment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the studio apartment is located
 *               locality:
 *                 type: string
 *                 description: Locality of the studio apartment
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the studio apartment
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the studio apartment
 *     responses:
 *       200:
 *         description: Studio Apartment updated successfully
 *       404:
 *         description: Studio Apartment not found
 */
router.put('/:id', studioApartmentController.updateStudioApartment);

/**
 * @swagger
 * /studio-apartments/{id}:
 *   delete:
 *     summary: Delete Studio Apartment by ID
 *     description: Delete a Studio Apartment by its ID
 *     tags:
 *       - Studio Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Studio Apartment ID
 *     responses:
 *       200:
 *         description: Studio Apartment deleted successfully
 *       404:
 *         description: Studio Apartment not found
 */
router.delete('/:id', studioApartmentController.deleteStudioApartment);

module.exports = router;
