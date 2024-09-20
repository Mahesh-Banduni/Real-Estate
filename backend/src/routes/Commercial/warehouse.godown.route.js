const express = require('express'); 
const router = express.Router();
const warehouseGodownController = require('../../controllers/Commercial/warehouse.godown.controller');

/**
 * @swagger
 * /warehouse-godowns:
 *   post:
 *     summary: Create a new Warehouse/Godown
 *     description: API to create a new Warehouse/Godown
 *     tags:
 *       - Warehouses/Godowns
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
 *                 description: City where the warehouse/godown is located
 *               locality:
 *                 type: string
 *                 description: Locality of the warehouse/godown
 *               Address:
 *                 type: string
 *                 description: Full address of the warehouse/godown
 *               landZone:
 *                 type: string
 *                 enum: ["Industrial", "Commercial", "Residential", "Transport and Communication", "Public Utilities", "Public and Semi Public Use", "Open Spaces", "Agriculture Zone", "Special Economic Zone", "Natural Conservation Zone", "Government Use"]
 *                 description: Land zone classification
 *               floorNumber:
 *                 type: string
 *                 enum: ["Lower Basement", "Upper Basement", "Ground", "1", "2", "3", "4"]
 *                 description: Floor number
 *               totalFloor:
 *                 type: number
 *                 description: Total number of floors
 *               furnished:
 *                 type: string
 *                 enum: ["Furnished", "Semi-Furnished", "Unfurnished"]
 *                 description: Furnished status
 *               floorsAllowed:
 *                 type: number
 *                 description: Number of floors allowed
 *               openSides:
 *                 type: number
 *                 description: Number of open sides
 *               facingRoadWidth:
 *                 type: number
 *                 description: Width of the facing road in meters
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
 *               currentlyLeasedOut:
 *                 type: boolean
 *                 description: Whether the property is currently leased out
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
 *         description: Warehouse/Godown created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', warehouseGodownController.createWarehouseGodown);

/**
 * @swagger
 * /warehouse-godowns:
 *   get:
 *     summary: Get all Warehouses/Godowns
 *     description: Retrieve a list of all Warehouses/Godowns
 *     tags:
 *       - Warehouses/Godowns
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
 *                     description: City where the warehouse/godown is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the warehouse/godown
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the warehouse/godown
 *       500:
 *         description: Internal server error
 */
router.get('/', warehouseGodownController.getAllWarehouseGodowns);

/**
 * @swagger
 * /warehouse-godowns/{id}:
 *   get:
 *     summary: Get Warehouse/Godown by ID
 *     description: Retrieve a Warehouse/Godown by its ID
 *     tags:
 *       - Warehouses/Godowns
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
router.get('/:id', warehouseGodownController.getWarehouseGodownById);

/**
 * @swagger
 * /warehouse-godowns/{id}:
 *   put:
 *     summary: Update Warehouse/Godown by ID
 *     description: Update a warehouse/godown's information by its ID
 *     tags:
 *       - Warehouses/Godowns
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
 *                 description: City where the warehouse/godown is located
 *               locality:
 *                 type: string
 *                 description: Locality of the warehouse/godown
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the warehouse/godown
 *     responses:
 *       200:
 *         description: Property updated successfully
 *       404:
 *         description: Property not found
 */
router.put('/:id', warehouseGodownController.updateWarehouseGodown);

/**
 * @swagger
 * /warehouse-godowns/{id}:
 *   delete:
 *     summary: Delete Warehouse/Godown by ID
 *     description: Delete a Warehouse/Godown by its ID
 *     tags:
 *       - Warehouses/Godowns
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
router.delete('/:id', warehouseGodownController.deleteWarehouseGodown);

module.exports = router;
