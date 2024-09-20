const express = require('express');
const router = express.Router();
const industrialShedController = require('../../controllers/Commercial/industrial.shed.controller');

/**
 * @swagger
 * /industrial-sheds:
 *   post:
 *     summary: Create a new Industrial Shed
 *     description: API to create a new Industrial Shed
 *     tags:
 *       - Industrial Sheds
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - superArea
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - amenities
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the industrial shed is located
 *               locality:
 *                 type: string
 *                 description: Locality of the industrial shed
 *               Address:
 *                 type: string
 *                 description: Full address of the industrial shed
 *               landZone:
 *                 type: string
 *                 enum: ["Industrial", "Commercial", "Residential", "Transport and Communication", "Public Utilities", "Public and Semi Public Use", "Open Spaces", "Agriculture Zone", "Special Economic Zone", "Natural Conservation Zone", "Government Use"]
 *                 description: Land zone classification
 *               floorsAllowed:
 *                 type: number
 *                 description: Number of floors allowed
 *               openSides:
 *                 type: number
 *                 description: Number of open sides
 *               facingRoadWidth:
 *                 type: number
 *                 description: Width of the facing road
 *               superArea:
 *                 type: number
 *                 description: Super area in square feet
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Sq-m", "Acre", "Bigha", "Hectare", "Marla", "Kanal", "Biswa1", "Biswa2", "Ground", "Aankadam", "Rood", "Chatak", "Kottah", "Marla", "Cent", "Perch", "Guntha", "Are", "Kuncham", "Katha", "Gaj", "Killa"]
 *                 description: Unit of area measurement
 *               possessionStatus:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Possession status
 *               constructionAge:
 *                 type: string
 *                 enum: ["New Construction", "1 year", "2 years", "3 years", "4 years", "5 years", "5 to 10 years", "10 to 15 years", "15 to 20 years", "20 to 30 years", "Above 30 years"]
 *                 description: Age of construction
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the property
 *               bookingAmount:
 *                 type: number
 *                 description: Booking amount
 *               priceNegotiable:
 *                 type: boolean
 *                 description: Whether the price is negotiable
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *               overlooking:
 *                 type: string
 *                 enum: ["Pool", "Garden/Park", "Main Road"]
 *                 description: What the property overlooks
 *               facing:
 *                 type: string
 *                 enum: ["North", "South", "West", "East", "North - East", "North - West", "South - West", "South - East"]
 *                 description: Property facing direction
 *               additionalRooms:
 *                 type: string
 *                 enum: ["Store Room", "Puja Room", "Servant Room"]
 *                 description: Additional rooms available
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: ["Reserved Parking", "Visitor Parking", "Lift", "Power Backup", "Gas Pipeline", "Park", "Kids Play Area", "Gymnasium", "Swimming Pool", "Club House", "Air Conditioned", "Vaastu Compliance", "Internet/Wi-Fi", "Security Personnel", "CCTV Camera"]
 *                 description: Amenities available
 *     responses:
 *       201:
 *         description: Industrial Shed created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', industrialShedController.createIndustrialShed);

/**
 * @swagger
 * /industrial-sheds:
 *   get:
 *     summary: Get all Industrial Sheds
 *     description: Retrieve a list of all Industrial Sheds
 *     tags:
 *       - Industrial Sheds
 *     responses:
 *       200:
 *         description: List of industrial sheds retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Shed ID
 *                   city:
 *                     type: string
 *                     description: City where the industrial shed is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the industrial shed
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the industrial shed
 *       500:
 *         description: Internal server error
 */
router.get('/', industrialShedController.getAllIndustrialSheds);

/**
 * @swagger
 * /industrial-sheds/{id}:
 *   get:
 *     summary: Get Industrial Shed by ID
 *     description: Retrieve an Industrial Shed by its ID
 *     tags:
 *       - Industrial Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shed ID
 *     responses:
 *       200:
 *         description: Shed retrieved successfully
 *       404:
 *         description: Shed not found
 */
router.get('/:id', industrialShedController.getIndustrialShedById);

/**
 * @swagger
 * /industrial-sheds/{id}:
 *   put:
 *     summary: Update Industrial Shed by ID
 *     description: Update an industrial shed's information by its ID
 *     tags:
 *       - Industrial Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shed ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the industrial shed is located
 *               locality:
 *                 type: string
 *                 description: Locality of the industrial shed
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the industrial shed
 *     responses:
 *       200:
 *         description: Shed updated successfully
 *       404:
 *         description: Shed not found
 */
router.put('/:id', industrialShedController.updateIndustrialShed);

/**
 * @swagger
 * /industrial-sheds/{id}:
 *   delete:
 *     summary: Delete Industrial Shed by ID
 *     description: Delete an Industrial Shed by its ID
 *     tags:
 *       - Industrial Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shed ID
 *     responses:
 *       200:
 *         description: Shed deleted successfully
 *       404:
 *         description: Shed not found
 */
router.delete('/:id', industrialShedController.deleteIndustrialShed);

module.exports = router;
