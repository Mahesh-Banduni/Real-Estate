const express = require('express');
const router = express.Router();
const officeITParkSEZController = require('../../controllers/Commercial/IT.park.SEZ.office.space.controller');

/**
 * @swagger
 * /it-park-sez-office-spaces:
 *   post:
 *     summary: Create a new IT Park/SEZ Office Space
 *     description: API to create a new IT Park/SEZ Office Space
 *     tags:
 *       - IT Park/SEZ Office Spaces
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
 *               - carpetArea
 *               - areaUnit
 *               - expectedPrice
 *               - ownership
 *               - amenities
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the office space is located
 *               locality:
 *                 type: string
 *                 description: Locality of the office space
 *               projectMarketName:
 *                 type: string
 *                 description: Name of the project or market
 *               address:
 *                 type: string
 *                 description: Full address of the office space
 *               landZone:
 *                 type: string
 *                 enum:
 *                   - Industrial
 *                   - Commercial
 *                   - Residential
 *                   - Transport and Communication
 *                   - Public Utilities
 *                   - Special Economic Zone
 *                   - Government Use
 *                 description: Zoning type of the land
 *               superArea:
 *                 type: number
 *                 description: Super area of the office space
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
 *     responses:
 *       201:
 *         description: Office space created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', officeITParkSEZController.createITParkSEZOfficeSpace);

/**
 * @swagger
 * /it-park-sez-office-spaces:
 *   get:
 *     summary: Get all IT Park/SEZ Office Spaces
 *     description: Retrieve a list of all IT Park/SEZ Office Spaces
 *     tags:
 *       - IT Park/SEZ Office Spaces
 *     responses:
 *       200:
 *         description: List of office spaces retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Office Space ID
 *                   city:
 *                     type: string
 *                     description: City where the office space is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the office space
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the office space
 *       500:
 *         description: Internal server error
 */
router.get('/', officeITParkSEZController.getAllITParkSEZOfficeSpaces);

/**
 * @swagger
 * /it-park-sez-office-spaces/{id}:
 *   get:
 *     summary: Get IT Park/SEZ Office Space by ID
 *     description: Retrieve an IT Park/SEZ Office Space by its ID
 *     tags:
 *       - IT Park/SEZ Office Spaces
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Office Space ID
 *     responses:
 *       200:
 *         description: Office space retrieved successfully
 *       404:
 *         description: Office space not found
 */
router.get('/:id', officeITParkSEZController.getITParkSEZOfficeSpaceById);

/**
 * @swagger
 * /it-park-sez-office-spaces/{id}:
 *   put:
 *     summary: Update IT Park/SEZ Office Space by ID
 *     description: Update an office space's information by its ID
 *     tags:
 *       - IT Park/SEZ Office Spaces
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Office Space ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the office space is located
 *               locality:
 *                 type: string
 *                 description: Locality of the office space
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the office space
 *     responses:
 *       200:
 *         description: Office space updated successfully
 *       404:
 *         description: Office space not found
 */
router.put('/:id', officeITParkSEZController.updateITParkSEZOfficeSpace);

/**
 * @swagger
 * /it-park-sez-office-spaces/{id}:
 *   delete:
 *     summary: Delete IT Park/SEZ Office Space by ID
 *     description: Delete an IT Park/SEZ Office Space by its ID
 *     tags:
 *       - IT Park/SEZ Office Spaces
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Office Space ID
 *     responses:
 *       200:
 *         description: Office space deleted successfully
 *       404:
 *         description: Office space not found
 */
router.delete('/:id', officeITParkSEZController.deleteITParkSEZOfficeSpace);

module.exports = router;
