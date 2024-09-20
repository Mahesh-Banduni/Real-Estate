const express = require('express');
const router = express.Router();
const agriculturePlotController = require('../../controllers/Agriculture/agriculture.plot.controller');

/**
 * @swagger
 * /agriculture-plots:
 *   post:
 *     summary: Create a new Agriculture Plot
 *     description: API to create a new Agriculture Plot
 *     tags:
 *       - Agriculture Plots
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
 *               - expectedPrice
 *               - ownership
 *               - plotType
 *               - status
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the agriculture plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the agriculture plot
 *               Address:
 *                 type: string
 *                 description: Full address of the agriculture plot
 *               floorsAllowed:
 *                 type: number
 *                 description: Number of floors allowed
 *               openSides:
 *                 type: number
 *                 description: Number of open sides
 *               facingRoadWidth:
 *                 type: number
 *                 description: Width of the facing road
 *               boundaryWall:
 *                 type: boolean
 *                 description: Whether the plot has a boundary wall
 *               plotArea:
 *                 type: number
 *                 description: Area of the plot
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Sq-m", "Acre", "Bigha", "Hectare", "Marla", "Kanal", "Biswa1", "Biswa2", "Ground", "Aankadam", "Rood", "Chatak", "Kottah", "Marla", "Cent", "Perch", "Guntha", "Are", "Kuncham", "Katha", "Gaj", "Killa"]
 *                 description: Unit of area measurement
 *               lengthdimension:
 *                 type: number
 *                 description: Length dimension in yards
 *               widthdimension:
 *                 type: number
 *                 description: Width dimension
 *               cornerPlot:
 *                 type: boolean
 *                 description: Whether the plot is a corner plot
 *               currentlyLeasedOut:
 *                 type: boolean
 *                 description: Whether the plot is currently leased out
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the plot
 *               bookingAmount:
 *                 type: number
 *                 description: Booking amount
 *               priceNegotiable:
 *                 type: boolean
 *                 description: Whether the price is negotiable
 *               overlooking:
 *                 type: string
 *                 enum: ["Pool", "Garden/Park", "Main Road"]
 *                 description: What the plot overlooks
 *               facing:
 *                 type: string
 *                 enum: ["North", "South", "West", "East", "North - East", "North - West", "South - West", "South - East"]
 *                 description: Plot facing direction
 *               approvedBy:
 *                 type: string
 *                 enum: ["MDDA"]
 *                 description: Authority that approved the plot
 *               plotType:
 *                 type: string
 *                 enum: ["Commercial", "Residential", "Agriculture", "Industrial"]
 *                 description: Type of the plot
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the plot
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *               features:
 *                 type: string
 *                 description: Additional features of the plot
 *               titleDeed:
 *                 type: boolean
 *                 description: Whether the title deed is available
 *               previousOwnerTitleDeedAvailable:
 *                 type: boolean
 *                 description: Whether the previous owner’s title deed is available
 *               revenueDocument:
 *                 type: boolean
 *                 description: Whether revenue documents are available
 *               encumberenceCertificate:
 *                 type: boolean
 *                 description: Whether the encumbrance certificate is available
 *               conversionCertificate:
 *                 type: boolean
 *                 description: Whether the conversion certificate is available
 *               waterConnection:
 *                 type: boolean
 *                 description: Whether there is a water connection
 *               electricityConnection:
 *                 type: boolean
 *                 description: Whether there is an electricity connection
 *               sewageConnection:
 *                 type: boolean
 *                 description: Whether there is a sewage connection
 *               roadAvailable:
 *                 type: boolean
 *                 description: Whether the road is available
 *     responses:
 *       201:
 *         description: Agriculture Plot created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', agriculturePlotController.createAgriculturePlot);

/**
 * @swagger
 * /agriculture-plots:
 *   get:
 *     summary: Get all Agriculture Plots
 *     description: Retrieve a list of all Agriculture Plots
 *     tags:
 *       - Agriculture Plots
 *     responses:
 *       200:
 *         description: List of agriculture plots retrieved successfully
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
 *                     description: City where the agriculture plot is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the agriculture plot
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the agriculture plot
 *       500:
 *         description: Internal server error
 */
router.get('/', agriculturePlotController.getAllAgriculturePlots);

/**
 * @swagger
 * /agriculture-plots/{id}:
 *   get:
 *     summary: Get Agriculture Plot by ID
 *     description: Retrieve an Agriculture Plot by its ID
 *     tags:
 *       - Agriculture Plots
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
router.get('/:id', agriculturePlotController.getAgriculturePlotById);

/**
 * @swagger
 * /agriculture-plots/{id}:
 *   put:
 *     summary: Update Agriculture Plot by ID
 *     description: Update an agriculture plot's information by its ID
 *     tags:
 *       - Agriculture Plots
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
 *                 description: City where the agriculture plot is located
 *               locality:
 *                 type: string
 *                 description: Locality of the agriculture plot
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the agriculture plot
 *     responses:
 *       200:
 *         description: Plot updated successfully
 *       404:
 *         description: Plot not found
 */
router.put('/:id', agriculturePlotController.updateAgriculturePlot);

/**
 * @swagger
 * /agriculture-plots/{id}:
 *   delete:
 *     summary: Delete Agriculture Plot by ID
 *     description: Delete an Agriculture Plot by its ID
 *     tags:
 *       - Agriculture Plots
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
router.delete('/:id', agriculturePlotController.deleteAgriculturePlot);

module.exports = router;
