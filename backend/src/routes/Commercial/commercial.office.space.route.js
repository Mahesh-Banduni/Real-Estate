const express = require('express');
const router = express.Router();
const commercialOfficeSpaceController = require('../../controllers/Commercial/commercial.office.space.controller');

/**
 * @swagger
 * /commercial-office-spaces:
 *   post:
 *     summary: Create a new Commercial Office Space
 *     description: API to create a new Commercial Office Space
 *     tags:
 *       - Commercial Office Spaces
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
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the office space is located
 *               locality:
 *                 type: string
 *                 description: Locality of the office space
 *               buildingComplexName:
 *                 type: string
 *                 description: Name of the building complex
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
 *                   - Public and Semi Public Use
 *                   - Open Spaces
 *                   - Agriculture Zone
 *                   - Special Economic Zone
 *                   - Natural Conservation Zone
 *                   - Government Use
 *                 description: Zoning type of the land
 *               idealForBusinesses:
 *                 type: string
 *                 enum: ["Private Company","Individual Business","Self Employed Business","Boutique",...]
 *                 description: Suitable business types for this office space
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms (if applicable)
 *               balconies:
 *                 type: number
 *                 description: Number of balconies
 *               floorNumber:
 *                 type: string
 *                 enum:
 *                   - Lower Basement
 *                   - Upper Basement
 *                   - Ground
 *                   - 1
 *                   - 2
 *                   - 3
 *                   - 4
 *                 description: Floor number
 *               superArea:
 *                 type: number
 *                 description: Super area of the office space
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the office space
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the office space
 *               ownership:
 *                 type: string
 *                 enum: ["Freehold", "Leasehold", "Power Of Attorney", "Co-operative Society"]
 *                 description: Ownership type
 *               transactionType:
 *                 type: string
 *                 enum: ["New Property", "Resale"]
 *                 description: Transaction type
 *     responses:
 *       201:
 *         description: Office space created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', commercialOfficeSpaceController.createCommercialOfficeSpace);

/**
 * @swagger
 * /commercial-office-spaces:
 *   get:
 *     summary: Get all Commercial Office Spaces
 *     description: Retrieve a list of all Commercial Office Spaces
 *     tags:
 *       - Commercial Office Spaces
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
router.get('/', commercialOfficeSpaceController.getAllCommercialOfficeSpaces);

/**
 * @swagger
 * /commercial-office-spaces/{id}:
 *   get:
 *     summary: Get Commercial Office Space by ID
 *     description: Retrieve a Commercial Office Space by its ID
 *     tags:
 *       - Commercial Office Spaces
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
router.get('/:id', commercialOfficeSpaceController.getCommercialOfficeSpaceById);

/**
 * @swagger
 * /commercial-office-spaces/{id}:
 *   put:
 *     summary: Update Commercial Office Space by ID
 *     description: Update an office space's information by its ID
 *     tags:
 *       - Commercial Office Spaces
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
router.put('/:id', commercialOfficeSpaceController.updateCommercialOfficeSpace);

/**
 * @swagger
 * /commercial-office-spaces/{id}:
 *   delete:
 *     summary: Delete Commercial Office Space by ID
 *     description: Delete a Commercial Office Space by its ID
 *     tags:
 *       - Commercial Office Spaces
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
router.delete('/:id', commercialOfficeSpaceController.deleteCommercialOfficeSpace);

module.exports = router;
