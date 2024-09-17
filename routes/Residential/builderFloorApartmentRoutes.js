const express = require('express');
const router = express.Router();
const builderFloorApartmentController = require('../../controllers/Residential/builderFloorApartmentController');

/**
 * @swagger
 * /builder-floor-apartments:
 *   post:
 *     summary: Create a new Builder Floor Apartment
 *     description: API to create a new Builder Floor Apartment
 *     tags:
 *       - Builder Floor Apartments
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
 *                 description: City where the apartment is located
 *               locality:
 *                 type: string
 *                 description: Locality of the apartment
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms in the apartment
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms in the apartment
 *               superArea:
 *                 type: number
 *                 description: Super area of the apartment
 *               carpetArea:
 *                 type: number
 *                 description: Carpet area of the apartment
 *               areaUnit:
 *                 type: string
 *                 enum: ["Sq-ft", "Sq-yrd", "Acre", "Hectare", ...]
 *                 description: Unit of area measurement
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the apartment
 *               status:
 *                 type: string
 *                 enum: ["Ready To Move", "Under Construction"]
 *                 description: Status of the apartment
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
 *         description: Apartment created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', builderFloorApartmentController.createBuilderFloorApartment);

/**
 * @swagger
 * /builder-floor-apartments:
 *   get:
 *     summary: Get all Builder Floor Apartments
 *     description: Retrieve a list of all Builder Floor Apartments
 *     tags:
 *       - Builder Floor Apartments
 *     responses:
 *       200:
 *         description: List of apartments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Apartment ID
 *                   city:
 *                     type: string
 *                     description: City where the apartment is located
 *                   locality:
 *                     type: string
 *                     description: Locality of the apartment
 *                   bedrooms:
 *                     type: number
 *                     description: Number of bedrooms
 *                   bathrooms:
 *                     type: number
 *                     description: Number of bathrooms
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the apartment
 *       500:
 *         description: Internal server error
 */
router.get('/', builderFloorApartmentController.getAllBuilderFloorApartments);

/**
 * @swagger
 * /builder-floor-apartments/{id}:
 *   get:
 *     summary: Get Builder Floor Apartment by ID
 *     description: Retrieve a Builder Floor Apartment by its ID
 *     tags:
 *       - Builder Floor Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apartment ID
 *     responses:
 *       200:
 *         description: Apartment retrieved successfully
 *       404:
 *         description: Apartment not found
 */
router.get('/:id', builderFloorApartmentController.getBuilderFloorApartmentById);

/**
 * @swagger
 * /builder-floor-apartments/{id}:
 *   put:
 *     summary: Update Builder Floor Apartment by ID
 *     description: Update an apartment's information by its ID
 *     tags:
 *       - Builder Floor Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apartment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 description: City where the apartment is located
 *               locality:
 *                 type: string
 *                 description: Locality of the apartment
 *               bedrooms:
 *                 type: number
 *                 description: Number of bedrooms
 *               bathrooms:
 *                 type: number
 *                 description: Number of bathrooms
 *               superArea:
 *                 type: number
 *                 description: Super area of the apartment
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the apartment
 *     responses:
 *       200:
 *         description: Apartment updated successfully
 *       404:
 *         description: Apartment not found
 */
router.put('/:id', builderFloorApartmentController.updateBuilderFloorApartment);

/**
 * @swagger
 * /builder-floor-apartments/{id}:
 *   delete:
 *     summary: Delete Builder Floor Apartment by ID
 *     description: Delete a Builder Floor Apartment by its ID
 *     tags:
 *       - Builder Floor Apartments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apartment ID
 *     responses:
 *       200:
 *         description: Apartment deleted successfully
 *       404:
 *         description: Apartment not found
 */
router.delete('/:id', builderFloorApartmentController.deleteBuilderFloorApartment);

module.exports = router;
