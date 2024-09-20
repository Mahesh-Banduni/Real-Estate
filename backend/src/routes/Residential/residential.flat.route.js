const express = require('express');
const router = express.Router();
const residentialFlatController = require('../../controllers/Residential/residential.flat.controller');

/**
 * @swagger
 * /residential-flats:
 *   post:
 *     summary: Create a new residential flat
 *     description: API to create a new residential flat
 *     tags:
 *       -Residential Flats
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
 *                 description: City where the residential flat is located
 *               locality:
 *                 type: string
 *                 description: Locality of the residential flat
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the residential flat
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the residential flat
 *               superArea:
 *                 type: number
 *                 description: Super area of the residential flat
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the residential flat
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the residential flat
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the residential flat
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
 *         description: Flat created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', residentialFlatController.createResidentialFlat);

/**
 * @swagger
 * /residential-flats:
 *   get:
 *     summary: Get all residential flats
 *     description: Retrieve a list of all residential flats
 *     tags:
 *       -Residential Flats
 *     responses:
 *       200:
 *         description: List of residential flats retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Flat ID
 *                   city:
 *                     type: string
 *                     description: City where the residential flat is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the residential flat
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the residential flat
 *       500:
 *         description: Internal server error
 */
router.get('/', residentialFlatController.getAllResidentialFlats);

/**
 * @swagger
 * /residential-flats/{id}:
 *   get:
 *     summary: Get residential flat by ID
 *     description: Retrieve a residential flat by its ID
 *     tags:
 *       -Residential Flats
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat retrieved successfully
 *       404:
 *         description: Flat not found
 */
router.get('/:id', residentialFlatController.getResidentialFlatById);

/**
 * @swagger
 * /residential-flats/{id}:
 *   put:
 *     summary: Update residential flat by ID
 *     description: Update a residential flat's information by its ID
 *     tags:
 *       - Flats
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the residential flat is located
 *               locality:
 *                 type: string
 *                 description: Locality of the residential flat
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the residential flat
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the residential flat
 *     responses:
 *       200:
 *         description: Flat updated successfully
 *       404:
 *         description: Flat not found
 */
router.put('/:id', residentialFlatController.updateResidentialFlat);

/**
 * @swagger
 * /residential-flats/{id}:
 *   delete:
 *     summary: Delete residential flat by ID
 *     description: Delete a residential flat by its ID
 *     tags:
 *       -Residential Flats
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat deleted successfully
 *       404:
 *         description: Flat not found
 */
router.delete('/:id', residentialFlatController.deleteResidentialFlat);

module.exports = router;
