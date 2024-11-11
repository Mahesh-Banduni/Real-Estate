const express = require('express');
const router = express.Router();
const auctionPropertyController = require('../controllers/auction.property.controller.js');

/**
 * @swagger
 * /auction-properties:
 *   post:
 *     summary: Create a new auction property
 *     description: API for creating a new auction property
 *     tags:
 *       - Auction Properties
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bankName
 *               - propertyID:
 *               - propertyType: 
 *             properties:
 *               bankName:
 *                 type: string
 *                 description: Bank name of the auction property
 *               propertyID:
 *                 type: string
 *                 description: Property ID of the auction property
 *               propertyType:
 *                 type: string
 *                 enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Plot/Land","Warehouse/ Godown","Industrial Plot/Land","Industrial Building","Industrial Shed", "Agricultural Plot/Land","Farm House"]
 *                 description: Property Type of the auction property
 *               borrowerName:
 *                 type: string
 *                 description: Borrower Name of the auction property
 *               propertyArea:
 *                 type: number
 *                 description: Property Area of the auction property
 *               propertyAreaUnit:
 *                 type: string
 *                 enum: ["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]
 *                 description: Property Area Unit of the auction property
 *               city:
 *                 type: string
 *                 description: City of the auction property
 *               district:
 *                 type: string
 *                 description: district of the auction property
 *               state:
 *                 type: string
 *                 description: state of the auction property
 *               reservePrice:
 *                 type: number
 *                 description: reserve price of the auction property
 *               emdAmount:
 *                 type: number
 *                 description: emd amount of the auction property
 *               emdSubmissionDeadline:
 *                 type: date
 *                 description: emd submission deadline of the auction
 *               auctionStartDateTime:
 *                 type: date
 *                 description: auction start date time of the auction
 *               auctionEndDateTime:
 *                 type: date
 *                 description: auction end date time of the auction
 *     responses:
 *       201:
 *         description: Auction property created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', auctionPropertyController.createAuctionProperty);

/**
 * @swagger
 * /auction-properties:
 *   get:
 *     summary: Get all auction properties
 *     description: Retrieve a list of all auction properties
 *     tags:
 *       - Auction Properties
 *     responses:
 *       200:
 *         description: List of auction properties retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', auctionPropertyController.getAllAuctionProperties);

/**
 * @swagger
 * /auction-properties/{id}:
 *   get:
 *     summary: Get auction property by ID
 *     description: Retrieve an auction property by its ID
 *     tags:
 *       - Auction Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auction property ID
 *     responses:
 *       200:
 *         description: Auction property retrieved successfully
 *       404:
 *         description: Auction property not found
 */
router.get('/:id', auctionPropertyController.getAuctionPropertyById);

/**
 * @swagger
 * /auction-properties/{id}:
 *   put:
 *     summary: Update auction property by ID
 *     description: Update an auction property by its ID
 *     tags:
 *       - Auction Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auction property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bankName:
 *                 type: string
 *                 description: Bank name of the auction property
 *               propertyID:
 *                 type: string
 *                 description: Property ID of the auction property
 *               propertyType:
 *                 type: string
 *                 enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Plot/Land","Warehouse/ Godown","Industrial Plot/Land","Industrial Building","Industrial Shed", "Agricultural Plot/Land","Farm House"]
 *                 description: Property Type of the auction property
 *               borrowerName:
 *                 type: string
 *                 description: Borrower Name of the auction property
 *               propertyArea:
 *                 type: number
 *                 description: Property Area of the auction property
 *               propertyAreaUnit:
 *                 type: string
 *                 enum: ["Sq-ft","Sq-yrd","Sq-m","Acre","Bigha","Hectare","Marla","Kanal","Biswa1","Biswa2","Ground","Aankadam","Rood","Chatak","Kottah","Marla","Cent","Perch","Guntha","Are","Kuncham","Katha","Gaj","Killa"]
 *                 description: Property Area Unit of the auction property
 *               city:
 *                 type: string
 *                 description: City of the auction property
 *               district:
 *                 type: string
 *                 description: district of the auction property
 *               state:
 *                 type: string
 *                 description: state of the auction property
 *               reservePrice:
 *                 type: number
 *                 description: reserve price of the auction property
 *               emdAmount:
 *                 type: number
 *                 description: emd amount of the auction property
 *               emdSubmissionDeadline:
 *                 type: date
 *                 description: emd submission deadline of the auction
 *               auctionStartDateTime:
 *                 type: date
 *                 description: auction start date time of the auction
 *               auctionEndDateTime:
 *                 type: date
 *                 description: auction end date time of the auction
 *     responses:
 *       200:
 *         description: Auction property updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Auction property not found
 */
router.put('/:id', auctionPropertyController.updateAuctionProperty);

/**
 * @swagger
 * /auction-properties/{id}:
 *   delete:
 *     summary: Delete auction property by ID
 *     description: Delete an auction property by its ID
 *     tags:
 *       - Auction Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auction property ID
 *     responses:
 *       200:
 *         description: Auction property deleted successfully
 *       404:
 *         description: Auction property not found
 */
router.delete('/:id', auctionPropertyController.deleteAuctionProperty);

module.exports = router;
