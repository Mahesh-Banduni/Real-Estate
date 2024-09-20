const express = require('express');
const router = express.Router();
const industrialPlotController = require('../../controllers/Commercial/industrial.plot.controller');

/**
 * @swagger
 * /industrial-plots:
 *   post:
 *     summary: Create a new Industrial Plot
 *     description: API to create a new Industrial Plot
 *     tags:
 *       - Industrial Plots
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - plotType
 *               - plotArea
 *               - lengthdimension
 *               - widthdimension
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - status
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the plot
 *               address:
 *                 type: string
 *                 description: Full address of the plot
 *               plotType:
 *                 type: string
 *                 enum: ["Commercial", "Residential", "Agriculture", "Industrial"]
 *                 description: Type of the plot (e.g., Industrial, Commercial)
 *               plotArea:
 *                 type: number
 *                 description: Area of the plot in square feet
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
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", "Marla", ...]
 *                 description: Unit of area measurement
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *     responses:
 *       201:
 *         description: Industrial plot created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', industrialPlotController.createIndustrialPlot);

/**
 * @swagger
 * /industrial-plots:
 *   get:
 *     summary: Get all Industrial Plots
 *     description: Retrieve a list of all Industrial Plots
 *     tags:
 *       - Industrial Plots
 *     responses:
 *       200:
 *         description: List of plots retrieved successfully
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
 *                   price:
 *                     type: number
 *                     description: Price of the plot
 *       500:
 *         description: Internal server error
 */
router.get('/', industrialPlotController.getAllIndustrialPlots);

/**
 * @swagger
 * /industrial-plots/{id}:
 *   get:
 *     summary: Get Industrial Plot by ID
 *     description: Retrieve an Industrial Plot by its ID
 *     tags:
 *       - Industrial Plots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Plot ID
 *     responses:
 *       200:
 *         description: Plot retrieved successfully
 *       404:
 *         description: Plot not found
 */
router.get('/:id', industrialPlotController.getIndustrialPlotById);

/**
 * @swagger
 * /industrial-plots/{id}:
 *   put:
 *     summary: Update Industrial Plot by ID
 *     description: Update a plot's information by its ID
 *     tags:
 *       - Industrial Plots
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
 *               price:
 *                 type: number
 *                 description: Price of the plot
 *     responses:
 *       200:
 *         description: Plot updated successfully
 *       404:
 *         description: Plot not found
 */
router.put('/:id', industrialPlotController.updateIndustrialPlot);

/**
 * @swagger
 * /industrial-plots/{id}:
 *   delete:
 *     summary: Delete Industrial Plot by ID
 *     description: Delete an Industrial Plot by its ID
 *     tags:
 *       - Industrial Plots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Plot ID
 *     responses:
 *       200:
 *         description: Plot deleted successfully
 *       404:
 *         description: Plot not found
 */
router.delete('/:id', industrialPlotController.deleteIndustrialPlot);

module.exports = router;
