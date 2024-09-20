const express = require('express');
const router = express.Router();
const commercialShowroomController = require('../../controllers/Commercial/commercial.showroom.controller');

/**
 * @swagger
 * /commercial-showrooms:
 *   post:
 *     summary: Create a new Commercial Showroom
 *     description: API to create a new Commercial Showroom
 *     tags:
 *       - Commercial Showrooms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - showroomName
 *               - address
 *               - showroomType
 *               - area
 *               - price
 *               - coveredArea
 *               - carpetArea
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - amenities
 *               - availableFrom
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the showroom is located
 *               locality:
 *                 type: string
 *                 description: Locality of the showroom
 *               showroomName:
 *                 type: string
 *                 description: Name of the showroom
 *               address:
 *                 type: string
 *                 description: Full address of the showroom
 *               showroomType:
 *                 type: string
 *                 description: Type of the showroom (e.g., Retail, Wholesale)
 *               area:
 *                 type: number
 *                 description: Area of the showroom in square feet
 *               price:
 *                 type: number
 *                 description: Price of the showroom
 *               coveredArea:
 *                 type: number
 *                 description: Covered area of the showroom
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the showroom
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare"]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the showroom
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
 *                 description: Date from which the showroom is available
 *     responses:
 *       201:
 *         description: Commercial showroom created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', commercialShowroomController.createCommercialShowroom);

/**
 * @swagger
 * /commercial-showrooms:
 *   get:
 *     summary: Get all Commercial Showrooms
 *     description: Retrieve a list of all Commercial Showrooms
 *     tags:
 *       - Commercial Showrooms
 *     responses:
 *       200:
 *         description: List of showrooms retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Showroom ID
 *                   city:
 *                     type: string
 *                     description: City where the showroom is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the showroom
 *                   price:
 *                     type: number
 *                     description: Price of the showroom
 *       500:
 *         description: Internal server error
 */
router.get('/', commercialShowroomController.getAllCommercialShowrooms);

/**
 * @swagger
 * /commercial-showrooms/{id}:
 *   get:
 *     summary: Get Commercial Showroom by ID
 *     description: Retrieve a Commercial Showroom by its ID
 *     tags:
 *       - Commercial Showrooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Showroom ID
 *     responses:
 *       200:
 *         description: Showroom retrieved successfully
 *       404:
 *         description: Showroom not found
 */
router.get('/:id', commercialShowroomController.getCommercialShowroomById);

/**
 * @swagger
 * /commercial-showrooms/{id}:
 *   put:
 *     summary: Update Commercial Showroom by ID
 *     description: Update a showroom's information by its ID
 *     tags:
 *       - Commercial Showrooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Showroom ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the showroom is located
 *               locality:
 *                 type: string
 *                 description: Locality of the showroom
 *               price:
 *                 type: number
 *                 description: Price of the showroom
 *     responses:
 *       200:
 *         description: Showroom updated successfully
 *       404:
 *         description: Showroom not found
 */
router.put('/:id', commercialShowroomController.updateCommercialShowroom);

/**
 * @swagger
 * /commercial-showrooms/{id}:
 *   delete:
 *     summary: Delete Commercial Showroom by ID
 *     description: Delete a Commercial Showroom by its ID
 *     tags:
 *       - Commercial Showrooms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Showroom ID
 *     responses:
 *       200:
 *         description: Showroom deleted successfully
 *       404:
 *         description: Showroom not found
 */
router.delete('/:id', commercialShowroomController.deleteCommercialShowroom);

module.exports = router;
