const express = require('express');
const router = express.Router();
const auctionPropertyController = require('../controllers/auction.property.controller');

/**
 * @swagger
 * /all-auction-properties:
 *   get:
 *     summary: Auction properties
 *     description: Retrieve a list of filtered properties with sorting options
 *     tags:
 *       - Auction Properties
 *     parameters:
 *       - in: query
 *         name: propertyType
 *         schema:
 *           type: string
 *           enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House", "Residential Villa", "Builder Floor Apartment", "Penthouse", "Studio Apartment", "Commercial Office Space", "IT Park/SEZ office", "Commercial Shop", "Commercial Showroom", "Commercial Land", "Warehouse/ Godown", "Industrial Land", "Industrial Building", "Industrial Shed", "Agricultural Land", "Farm House"]
 *         description: Type of property (e.g., Residential, Commercial)
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *           enum: ["Dehradun", "Udaipur", "Delhi", "Haridwar", "Rishikesh", "Haldwani"]
 *         description: City to filter properties
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price to filter properties
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price to filter properties
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [price, dateListed]
 *         description: Sort properties by expected price or date listed
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Order of sorting (asc for ascending, desc for descending)
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
 *                   bankName:
 *                     type: string
 *                     description: Bank name of the auction property
 *                   propertyID:
 *                     type: string
 *                     description: Property ID of the auction property
 *                   propertyType:
 *                     type: string
 *                     enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House", "Residential Villa", "Builder Floor Apartment", "Penthouse", "Studio Apartment", "Commercial Office Space", "IT Park/SEZ office", "Commercial Shop", "Commercial Showroom", "Commercial Land", "Warehouse/ Godown", "Industrial Land", "Industrial Building", "Industrial Shed", "Agricultural Land", "Farm House"]
 *                     description: Property Type of the auction property
 *                   borrowerName:
 *                     type: string
 *                     description: Borrower name of the auction property
 *                   propertyArea:
 *                     type: number
 *                     description: Property area of the auction property
 *                   propertyAreaUnit:
 *                     type: string
 *                     enum: ["Sq-ft", "Sq-yrd", "Sq-m", "Acre", "Bigha", "Hectare", "Marla", "Kanal", "Biswa1", "Biswa2", "Ground", "Aankadam", "Rood", "Chatak", "Kottah", "Cent", "Perch", "Guntha", "Are", "Kuncham", "Katha", "Gaj", "Killa"]
 *                     description: Property area unit of the auction property
 *                   city:
 *                     type: string
 *                     description: City of the auction property
 *                   reservePrice:
 *                     type: number
 *                     description: Reserve price of the auction property
 *                   emdAmount:
 *                     type: number
 *                     description: EMD amount of the auction property
 *                   emdSubmissionDeadline:
 *                     type: string
 *                     format: date-time
 *                     description: EMD submission deadline of the auction
 *                   auctionStartDateTime:
 *                     type: string
 *                     format: date-time
 *                     description: Auction start date and time
 *                   auctionEndDateTime:
 *                     type: string
 *                     format: date-time
 *                     description: Auction end date and time
 *                   image:
 *                     type: array
 *                     items:
 *                       type: string
 *                       format: binary
 *                     description: Auction property images
 *       404:
 *         description: No properties found matching the criteria
 */

router.get('', auctionPropertyController.getAllAuctionProperties);

module.exports = router;
