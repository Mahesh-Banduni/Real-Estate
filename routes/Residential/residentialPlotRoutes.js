const express = require('express');
const router = express.Router();
const residentialPlotController = require('../../controllers/Residential/residentialPlotController');

/**
 * @swagger
 * /residentialPlots:
 *   post:
 *     summary: Create a new residential plot
 *     description: API to create a new residential plot
 *     tags:
 *       - Residential Plots
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
 *               - areaUnit
 *               - lengthdimension
 *               - widthdimension
 *               - expectedPrice
 *               - status
 *               - ownership
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the plot
 *               plotArea:
 *                 type: number
 *                 description: Area of the plot
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               lengthdimension:
 *                 type: number
 *                 description: Length of the plot
 *               widthdimension:
 *                 type: number
 *                 description: Width of the plot
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the plot
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the plot
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", ...]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *     responses:
 *       201:
 *         description: Residential plot created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', residentialPlotController.createResidentialPlot);

/**
 * @swagger
 * /residentialPlots:
 *   get:
 *     summary: Get all residential plots
 *     description: Retrieve a list of all residential plots
 *     tags:
 *       - Residential Plots
 *     responses:
 *       200:
 *         description: List of residential plots retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Plot ID
 *                   city:
 *                     type: string
 *                     description: City where the plot is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the plot
 *                   plotArea:
 *                     type: number
 *                     description: Area of the plot
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the plot
 *       500:
 *         description: Internal server error
 */
router.get('/', residentialPlotController.getAllResidentialPlots);

/**
 * @swagger
 * /residentialPlots/{id}:
 *   get:
 *     summary: Get residential plot by ID
 *     description: Retrieve a residential plot by its ID
 *     tags:
 *       - Residential Plots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Plot ID
 *     responses:
 *       200:
 *         description: Residential plot retrieved successfully
 *       404:
 *         description: Residential plot not found
 */
router.get('/:id', residentialPlotController.getResidentialPlotById);

/**
 * @swagger
 * /residentialPlots/{id}:
 *   put:
 *     summary: Update residential plot by ID
 *     description: Update a residential plot's information by its ID
 *     tags:
 *       - Residential Plots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Plot ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the plot
 *               plotArea:
 *                 type: number
 *                 description: Area of the plot
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the plot
 *     responses:
 *       200:
 *         description: Residential plot updated successfully
 *       404:
 *         description: Residential plot not found
 */
router.put('/:id', residentialPlotController.updateResidentialPlot);

/**
 * @swagger
 * /residentialPlots/{id}:
 *   delete:
 *     summary: Delete residential plot by ID
 *     description: Delete a residential plot by its ID
 *     tags:
 *       - Residential Plots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Plot ID
 *     responses:
 *       200:
 *         description: Residential plot deleted successfully
 *       404:
 *         description: Residential plot not found
 */
router.delete('/:id', residentialPlotController.deleteResidentialPlot);

module.exports = router;
