const express = require('express');
const router = express.Router();
const commercialPlotController = require('../../controllers/Commercial/commercial.plot.controller');

/**
 * @swagger
 * /commercial-plots:
 *   post:
 *     summary: Create a new Commercial Plot
 *     description: API to create a new Commercial Plot
 *     tags:
 *       - Commercial Plots
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - plotName
 *               - address
 *               - plotType
 *               - lengthdimension
 *               - widthdimension
 *               - plotArea
 *               - coveredArea
 *               - carpetArea
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - status
 *               - transactionType
 *               - amenities
 *               - availableFrom
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the plot
 *               plotName:
 *                 type: string
 *                 description: Name of the plot
 *               address:
 *                 type: string
 *                 description: Full address of the plot
 *               plotType:
 *                 type: string
 *                 enum: ["Commercial","Residential","Agriculture","Industrial"]
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
 *               coveredArea:
 *                 type: number
 *                 description: Covered area of the plot
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the plot
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare",......]
 *                 description: Unit of area measurement
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               amenities:
 *                 type: string
 *                 enum: ["Reserved Parking", "Security", "Water Supply", "Electricity", "Lift"]
 *                 description: Amenities available
 *               availableFrom:
 *                 type: string
 *                 format: date
 *                 description: Date from which the plot is available
 *     responses:
 *       201:
 *         description: Commercial plot created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', commercialPlotController.createCommercialPlot);

/**
 * @swagger
 * /commercial-plots:
 *   get:
 *     summary: Get all Commercial Plots
 *     description: Retrieve a list of all Commercial Plots
 *     tags:
 *       - Commercial Plots
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
router.get('/', commercialPlotController.getAllCommercialPlots);

/**
 * @swagger
 * /commercial-plots/{id}:
 *   get:
 *     summary: Get Commercial Plot by ID
 *     description: Retrieve a Commercial Plot by its ID
 *     tags:
 *       - Commercial Plots
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
router.get('/:id', commercialPlotController.getCommercialPlotById);

/**
 * @swagger
 * /commercial-plots/{id}:
 *   put:
 *     summary: Update Commercial Plot by ID
 *     description: Update a plot's information by its ID
 *     tags:
 *       - Commercial Plots
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
router.put('/:id', commercialPlotController.updateCommercialPlot);

/**
 * @swagger
 * /commercial-plots/{id}:
 *   delete:
 *     summary: Delete Commercial Plot by ID
 *     description: Delete a Commercial Plot by its ID
 *     tags:
 *       - Commercial Plots
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
router.delete('/:id', commercialPlotController.deleteCommercialPlot);

module.exports = router;
