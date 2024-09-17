const express = require('express');
const router = express.Router();
const residentialHouseController = require('../../controllers/Residential/residentialHouseController');

/**
 * @swagger
 * /residentialHouses:
 *   post:
 *     summary: Create a new residential house
 *     description: API to create a new residential house
 *     tags:
 *       - Residential Houses
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
 *               - plotArea
 *               - carpetArea
 *               - coveredArea
 *               - areaUnit
 *               - expectedPrice
 *               - status
 *               - ownership
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the house is located
 *               locality:
 *                 type: string
 *                 description: Locality of the house
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the house
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the house
 *               plotArea:
 *                 type: number
 *                 description: Plot area of the house
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the house
 *               coveredArea:
 *                 type: number
 *                 description: Carpet area of the house
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare"]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the house
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the house
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
 *         description: Residential house created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', residentialHouseController.createResidentialHouse);

/**
 * @swagger
 * /residentialHouses:
 *   get:
 *     summary: Get all residential houses
 *     description: Retrieve a list of all residential houses
 *     tags:
 *       - Residential Houses
 *     responses:
 *       200:
 *         description: List of residential houses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: House ID
 *                   city:
 *                     type: string
 *                     description: City where the house is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the house
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the house
 *       500:
 *         description: Internal server error
 */
router.get('/', residentialHouseController.getAllResidentialHouses);

/**
 * @swagger
 * /residentialHouses/{id}:
 *   get:
 *     summary: Get residential house by ID
 *     description: Retrieve a residential house by its ID
 *     tags:
 *       - Residential Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: House ID
 *     responses:
 *       200:
 *         description: Residential house retrieved successfully
 *       404:
 *         description: Residential house not found
 */
router.get('/:id', residentialHouseController.getResidentialHouseById);

/**
 * @swagger
 * /residentialHouses/{id}:
 *   put:
 *     summary: Update residential house by ID
 *     description: Update a residential house's information by its ID
 *     tags:
 *       - Residential Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: House ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the house is located
 *               locality:
 *                 type: string
 *                 description: Locality of the house
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               plotArea:
 *                 type: number
 *                 description: Plot area of the house
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the house
 *     responses:
 *       200:
 *         description: Residential house updated successfully
 *       404:
 *         description: Residential house not found
 */
router.put('/:id', residentialHouseController.updateResidentialHouse);

/**
 * @swagger
 * /residentialHouses/{id}:
 *   delete:
 *     summary: Delete residential house by ID
 *     description: Delete a residential house by its ID
 *     tags:
 *       - Residential Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: House ID
 *     responses:
 *       200:
 *         description: Residential house deleted successfully
 *       404:
 *         description: Residential house not found
 */
router.delete('/:id', residentialHouseController.deleteResidentialHouse);

module.exports = router;
