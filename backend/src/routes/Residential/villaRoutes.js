const express = require('express');
const router = express.Router();
const villaController = require('../../controllers/Residential/villaController');

/**
 * @swagger
 * /villas:
 *   post:
 *     summary: Create a new villa
 *     description: API to create a new villa
 *     tags:
 *       - Villas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - plotArea
 *               - lengthdimension
 *               - breadthdimension
 *               - carpetArea
 *               - superArea
 *               - csAreaUnit
 *               - plotAreaUnit
 *               - expectedPrice
 *               - ownership
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the villa is located
 *               locality:
 *                 type: string
 *                 description: Locality of the villa
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the villa
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the villa
 *               plotArea:
 *                 type: number
 *                 description: Plot area of the villa
 *               lengthdimension:
 *                 type: number
 *                 description: Length of the plot
 *               widthdimension:
 *                 type: number
 *                 description: Width of the plot
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the villa
 *               superArea:
 *                 type: number
 *                 description: Super area of the villa
 *               csAreaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare"]
 *                 description: Unit of area measurement
 *               plotAreaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare"]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the villa
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
 *         description: Villa created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', villaController.createVilla);

/**
 * @swagger
 * /villas:
 *   get:
 *     summary: Get all villas
 *     description: Retrieve a list of all villas
 *     tags:
 *       - Villas
 *     responses:
 *       200:
 *         description: List of villas retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Villa ID
 *                   city:
 *                     type: string
 *                     description: City where the villa is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the villa
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the villa
 *       500:
 *         description: Internal server error
 */
router.get('/', villaController.getAllVillas);

/**
 * @swagger
 * /villas/{id}:
 *   get:
 *     summary: Get villa by ID
 *     description: Retrieve a villa by its ID
 *     tags:
 *       - Villas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Villa ID
 *     responses:
 *       200:
 *         description: Villa retrieved successfully
 *       404:
 *         description: Villa not found
 */
router.get('/:id', villaController.getVillaById);

/**
 * @swagger
 * /villas/{id}:
 *   put:
 *     summary: Update villa by ID
 *     description: Update a villa's information by its ID
 *     tags:
 *       - Villas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Villa ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the villa is located
 *               locality:
 *                 type: string
 *                 description: Locality of the villa
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               plotArea:
 *                 type: number
 *                 description: Plot area of the villa
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the villa
 *     responses:
 *       200:
 *         description: Villa updated successfully
 *       404:
 *         description: Villa not found
 */
router.put('/:id', villaController.updateVilla);

/**
 * @swagger
 * /villas/{id}:
 *   delete:
 *     summary: Delete villa by ID
 *     description: Delete a villa by its ID
 *     tags:
 *       - Villas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Villa ID
 *     responses:
 *       200:
 *         description: Villa deleted successfully
 *       404:
 *         description: Villa not found
 */
router.delete('/:id', villaController.deleteVilla);

module.exports = router;
