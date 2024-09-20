const express = require('express'); 
const router = express.Router();
const industrialBuildingController = require('../../controllers/Commercial/industrial.building.controller');

/**
 * @swagger
 * /industrial-buildings:
 *   post:
 *     summary: Create a new Industrial Building
 *     description: API to create a new Industrial Building
 *     tags:
 *       - Industrial Buildings
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
 *                 description: City where the industrial building is located
 *               locality:
 *                 type: string
 *                 description: Locality of the industrial building
 *               Address:
 *                 type: string
 *                 description: Full address of the industrial building
 *               landZone:
 *                 type: string
 *                 enum: ["Industrial", "Commercial", "Residential", "Transport and Communication", "Public Utilities", "Public and Semi Public Use", "Open Spaces", "Agriculture Zone", "Special Economic Zone", "Natural Conservation Zone", "Government Use"]
 *                 description: Land zone classification
 *               totalFloor:
 *                 type: number
 *                 description: Total number of floors
 *               floorsAllowed:
 *                 type: number
 *                 description: Number of floors allowed
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
 *         description: Industrial Building created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', industrialBuildingController.createIndustrialBuilding);

/**
 * @swagger
 * /industrial-buildings:
 *   get:
 *     summary: Get all Industrial Buildings
 *     description: Retrieve a list of all Industrial Buildings
 *     tags:
 *       - Industrial Buildings
 *     responses:
 *       200:
 *         description: List of properties retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Property ID
 *                   city:
 *                     type: string
 *                     description: City where the industrial building is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the industrial building
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the industrial building
 *       500:
 *         description: Internal server error
 */
router.get('/', industrialBuildingController.getAllIndustrialBuildings);

/**
 * @swagger
 * /industrial-buildings/{id}:
 *   get:
 *     summary: Get Industrial Building by ID
 *     description: Retrieve an Industrial Building by its ID
 *     tags:
 *       - Industrial Buildings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property retrieved successfully
 *       404:
 *         description: Property not found
 */
router.get('/:id', industrialBuildingController.getIndustrialBuildingById);

/**
 * @swagger
 * /industrial-buildings/{id}:
 *   put:
 *     summary: Update Industrial Building by ID
 *     description: Update an industrial building's information by its ID
 *     tags:
 *       - Industrial Buildings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the industrial building is located
 *               locality:
 *                 type: string
 *                 description: Locality of the industrial building
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the industrial building
 *     responses:
 *       200:
 *         description: Property updated successfully
 *       404:
 *         description: Property not found
 */
router.put('/:id', industrialBuildingController.updateIndustrialBuilding);

/**
 * @swagger
 * /industrial-buildings/{id}:
 *   delete:
 *     summary: Delete Industrial Building by ID
 *     description: Delete an Industrial Building by its ID
 *     tags:
 *       - Industrial Buildings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
 *       404:
 *         description: Property not found
 */
router.delete('/:id', industrialBuildingController.deleteIndustrialBuilding);

module.exports = router;
