const express = require('express');
const router = express.Router();
const flatController = require('../../controllers/Residential/flatController');

/**
 * @swagger
 * /flats:
 *   post:
 *     summary: Create a new flat
 *     description: API to create a new flat
 *     tags:
 *       - Flats
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
 *                 description: City where the flat is located
 *               locality:
 *                 type: string
 *                 description: Locality of the flat
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the flat
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the flat
 *               superArea:
 *                 type: number
 *                 description: Super area of the flat
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the flat
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the flat
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the flat
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
router.post('/', flatController.createFlat);

/**
 * @swagger
 * /flats:
 *   get:
 *     summary: Get all flats
 *     description: Retrieve a list of all flats
 *     tags:
 *       - Flats
 *     responses:
 *       200:
 *         description: List of flats retrieved successfully
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
 *                     description: City where the flat is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the flat
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the flat
 *       500:
 *         description: Internal server error
 */
router.get('/', flatController.getAllFlats);

/**
 * @swagger
 * /flats/{id}:
 *   get:
 *     summary: Get flat by ID
 *     description: Retrieve a flat by its ID
 *     tags:
 *       - Flats
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
router.get('/:id', flatController.getFlatById);

/**
 * @swagger
 * /flats/{id}:
 *   put:
 *     summary: Update flat by ID
 *     description: Update a flat's information by its ID
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
 *                 description: City where the flat is located
 *               locality:
 *                 type: string
 *                 description: Locality of the flat
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the flat
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the flat
 *     responses:
 *       200:
 *         description: Flat updated successfully
 *       404:
 *         description: Flat not found
 */
router.put('/:id', flatController.updateFlat);

/**
 * @swagger
 * /flats/{id}:
 *   delete:
 *     summary: Delete flat by ID
 *     description: Delete a flat by its ID
 *     tags:
 *       - Flats
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
router.delete('/:id', flatController.deleteFlat);

module.exports = router;
