const express = require('express');
const router = express.Router();
const farmHouseController = require('../../controllers/Agriculture/farm.house.controller');

/**
 * @swagger
 * /farm-houses:
 *   post:
 *     summary: Create a new FarmHouse
 *     description: API to create a new FarmHouse
 *     tags:
 *       - Farm Houses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - carpetArea
 *               - superArea
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the farm house is located
 *               locality:
 *                 type: string
 *                 description: Locality of the farm house
 *               projectSocietyName:
 *                 type: string
 *                 description: Project or society name of the farm house
 *               Address:
 *                 type: string
 *                 description: Full address of the farm house
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               totalFloor:
 *                 type: number
 *                 description: Total number of floors in the building
 *               furnished:
 *                 type: string
 *                 enum: ["Semi-Furnished","Furnished", "Unfurnished"]
 *                 description: Furnishing status of the farm house
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               floorsAllowed:
 *                 type: number
 *                 description: Number of floors allowed
 *               openSides:
 *                 type: number
 *                 description: Number of open sides
 *               facingRoadWidth:
 *                 type: number
 *                 description: Width of the facing road
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the farm house
 *               superArea:
 *                 type: number
 *                 description: Super area of the farm house
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]
 *                 description: Unit of area measurement
 *               possessionStatus:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Possession status of the farm house
 *               constructionAge:
 *                 type: string
 *                 enum: ["New Construction","1 year", "2 years", "3 years", "4 years","5 years", "5 to 10 years","10 to 15 years","15 to 20 years","20 to 30 years","Above 30 years"]
 *                 description: Age of the construction
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the farm house
 *               bookingAmount:
 *                 type: number
 *                 description: Booking amount
 *               priceNegotiable:
 *                 type: boolean
 *                 description: Whether the price is negotiable
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold","Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               flooring:
 *                 type: string
 *                 enum: ["Ceramic Tiles","Wooden","Vitrified","Marble","Granite"]
 *                 description: Flooring type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property","Resale"]
 *                 description: Transaction type
 *               overlooking:
 *                 type: string
 *                 enum: ["Pool","Garden/Park","Main Road"]
 *                 description: What the farm house overlooks
 *               facing:
 *                 type: string
 *                 enum: ["North", "South", "West", "East","North - East","North - West", "South - West", "South - East"]
 *                 description: Farm house facing direction
 *               additionalRooms:
 *                 type: string
 *                 enum: ["Store Room","Puja Room","Servant Room"]
 *                 description: Additional rooms in the farm house
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: ["Parking","Lift","Power Backup","Gas Pipeline","Park","Kids Play Area","Gymnasium","Swimming Pool","Club House","Air Conditioned","Vaastu Compliance","Internet/Wi-Fi","Security Personnel"]
 *                 description: List of amenities available
 *     responses:
 *       201:
 *         description: FarmHouse created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', farmHouseController.createFarmHouse);

/**
 * @swagger
 * /farm-houses:
 *   get:
 *     summary: Get all FarmHouses
 *     description: Retrieve a list of all FarmHouses
 *     tags:
 *       - Farm Houses
 *     responses:
 *       200:
 *         description: List of farm houses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: FarmHouse ID
 *                   city:
 *                     type: string
 *                     description: City where the farm house is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the farm house
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the farm house
 *       500:
 *         description: Internal server error
 */
router.get('/', farmHouseController.getAllFarmHouses);

/**
 * @swagger
 * /farm-houses/{id}:
 *   get:
 *     summary: Get FarmHouse by ID
 *     description: Retrieve a FarmHouse by its ID
 *     tags:
 *       - Farm Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: FarmHouse ID
 *     responses:
 *       200:
 *         description: FarmHouse retrieved successfully
 *       404:
 *         description: FarmHouse not found
 */
router.get('/:id', farmHouseController.getFarmHouseById);

/**
 * @swagger
 * /farm-houses/{id}:
 *   put:
 *     summary: Update FarmHouse by ID
 *     description: Update a farm house's information by its ID
 *     tags:
 *       - Farm Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: FarmHouse ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the farm house is located
 *               locality:
 *                 type: string
 *                 description: Locality of the farm house
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the farm house
 *     responses:
 *       200:
 *         description: FarmHouse updated successfully
 *       404:
 *         description: FarmHouse not found
 */
router.put('/:id', farmHouseController.updateFarmHouse);

/**
 * @swagger
 * /farm-houses/{id}:
 *   delete:
 *     summary: Delete FarmHouse by ID
 *     description: Delete a FarmHouse by its ID
 *     tags:
 *       - Farm Houses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: FarmHouse ID
 *     responses:
 *       200:
 *         description: FarmHouse deleted successfully
 *       404:
 *         description: FarmHouse not found
 */
router.delete('/:id', farmHouseController.deleteFarmHouse);

module.exports = router;
