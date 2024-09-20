const express = require('express');
const router = express.Router();
const penthouseController = require('../../controllers/Residential/pent.house.controller');

/**
 * @swagger
 * /penthouses:
 *   post:
 *     summary: Create a new Penthouse
 *     description: API to create a new Penthouse
 *     tags:
 *       - Penthouses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - locality
 *               - bedrooms
 *               - bathrooms
 *               - superArea
 *               - carpetArea
 *               - areaUnit
 *               - expectedPrice
 *               - status
 *               - ownership
 *               - transactionType
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the penthouse is located
 *               locality:
 *                 type: string
 *                 description: Locality of the penthouse
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the penthouse
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the penthouse
 *               superArea:
 *                 type: number
 *                 description: Super area of the penthouse
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the penthouse
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the penthouse
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the penthouse
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold"]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *     responses:
 *       201:
 *         description: Penthouse created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', penthouseController.createPenthouse);

/**
 * @swagger
 * /penthouses:
 *   get:
 *     summary: Get all Penthouses
 *     description: Retrieve a list of all Penthouses
 *     tags:
 *       - Penthouses
 *     responses:
 *       200:
 *         description: List of penthouses retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Penthouse ID
 *                   city:
 *                     type: string
 *                     description: City where the penthouse is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the penthouse
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the penthouse
 *       500:
 *         description: Internal server error
 */
router.get('/', penthouseController.getAllPenthouses);

/**
 * @swagger
 * /penthouses/{id}:
 *   get:
 *     summary: Get Penthouse by ID
 *     description: Retrieve a Penthouse by its ID
 *     tags:
 *       - Penthouses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Penthouse ID
 *     responses:
 *       200:
 *         description: Penthouse retrieved successfully
 *       404:
 *         description: Penthouse not found
 */
router.get('/:id', penthouseController.getPenthouseById);

/**
 * @swagger
 * /penthouses/{id}:
 *   put:
 *     summary: Update Penthouse by ID
 *     description: Update a penthouse's information by its ID
 *     tags:
 *       - Penthouses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Penthouse ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the penthouse is located
 *               locality:
 *                 type: string
 *                 description: Locality of the penthouse
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the penthouse
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the penthouse
 *     responses:
 *       200:
 *         description: Penthouse updated successfully
 *       404:
 *         description: Penthouse not found
 */
router.put('/:id', penthouseController.updatePenthouse);

/**
 * @swagger
 * /penthouses/{id}:
 *   delete:
 *     summary: Delete Penthouse by ID
 *     description: Delete a Penthouse by its ID
 *     tags:
 *       - Penthouses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Penthouse ID
 *     responses:
 *       200:
 *         description: Penthouse deleted successfully
 *       404:
 *         description: Penthouse not found
 */
router.delete('/:id', penthouseController.deletePenthouse);

module.exports = router;
