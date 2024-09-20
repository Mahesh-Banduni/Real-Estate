const express = require('express');
const router = express.Router();
const commercialShopController = require('../../controllers/Commercial/commercial.shop.controller');

/**
 * @swagger
 * /commercial-shops:
 *   post:
 *     summary: Create a new Commercial Shop
 *     description: API to create a new Commercial Shop
 *     tags:
 *       - Commercial Shops
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - shopName
 *               - address
 *               - shopType
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
 *                 description: City where the shop is located
 *               locality:
 *                 type: string
 *                 description: Locality of the shop
 *               shopName:
 *                 type: string
 *                 description: Name of the shop
 *               address:
 *                 type: string
 *                 description: Full address of the shop
 *               shopType:
 *                 type: string
 *                 description: Type of the shop (e.g., Retail, Wholesale)
 *               area:
 *                 type: number
 *                 description: Area of the shop in square feet
 *               price:
 *                 type: number
 *                 description: Price of the shop
 *               coveredArea:
 *                 type: number
 *                 description: Covered area of the office space
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the office space
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare"]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the office space
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               amenities:
 *                 type: string
 *                 enum: ["Reserved Parking",....]
 *                 description: Amenities type

 *               availableFrom:
 *                 type: string
 *                 format: date
 *                 description: Date from which the shop is available
 *     responses:
 *       201:
 *         description: Commercial shop created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', commercialShopController.createCommercialShop);

/**
 * @swagger
 * /commercial-shops:
 *   get:
 *     summary: Get all Commercial Shops
 *     description: Retrieve a list of all Commercial Shops
 *     tags:
 *       - Commercial Shops
 *     responses:
 *       200:
 *         description: List of shops retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Shop ID
 *                   city:
 *                     type: string
 *                     description: City where the shop is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the shop
 *                   price:
 *                     type: number
 *                     description: Price of the shop
 *       500:
 *         description: Internal server error
 */
router.get('/', commercialShopController.getAllCommercialShops);

/**
 * @swagger
 * /commercial-shops/{id}:
 *   get:
 *     summary: Get Commercial Shop by ID
 *     description: Retrieve a Commercial Shop by its ID
 *     tags:
 *       - Commercial Shops
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shop ID
 *     responses:
 *       200:
 *         description: Shop retrieved successfully
 *       404:
 *         description: Shop not found
 */
router.get('/:id', commercialShopController.getCommercialShopById);

/**
 * @swagger
 * /commercial-shops/{id}:
 *   put:
 *     summary: Update Commercial Shop by ID
 *     description: Update a shop's information by its ID
 *     tags:
 *       - Commercial Shops
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shop ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the shop is located
 *               locality:
 *                 type: string
 *                 description: Locality of the shop
 *               price:
 *                 type: number
 *                 description: Price of the shop
 *     responses:
 *       200:
 *         description: Shop updated successfully
 *       404:
 *         description: Shop not found
 */
router.put('/:id', commercialShopController.updateCommercialShop);

/**
 * @swagger
 * /commercial-shops/{id}:
 *   delete:
 *     summary: Delete Commercial Shop by ID
 *     description: Delete a Commercial Shop by its ID
 *     tags:
 *       - Commercial Shops
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shop ID
 *     responses:
 *       200:
 *         description: Shop deleted successfully
 *       404:
 *         description: Shop not found
 */
router.delete('/:id', commercialShopController.deleteCommercialShop);

module.exports = router;
