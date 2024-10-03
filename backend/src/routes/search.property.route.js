const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/property.controller.js');

/**
 * @swagger
 * /search-properties:
 *   get:
 *     summary: Search properties
 *     description: Retrieve a list of filtered properties with sorting options
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: query
 *         name: propertyPurpose
 *         schema:
 *           type: string
 *           enum: ["Sale","Exchange Property","Partnership Property"]
 *         description: Purpose of the property (e.g., Sale or Rent)
 *       - in: query
 *         name: propertyType
 *         schema:
 *           type: string
 *           enum: ["Residential Plot/Land", "Residential Flat/Apartment", "Residential House","Residential Villa","Builder Floor Apartment","Penthouse","Studio Apartment","Commercial Office Space","IT Park/SEZ office","Commercial Shop","Commercial Showroom","Commercial Land","Warehouse/ Godown","Industrial Land","Industrial Building","Industrial Shed", "Agricultural Land","Farm House"]
 *         description: Type of property (e.g., Residential, Commercial)
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *           enum: ["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"]
 *         description: City to filter properties
 *       - in: query
 *         name: locality
 *         schema:
 *           type: string
 *         description: Locality to filter properties
 *       - in: query
 *         name: fromCity
 *         schema:
 *           type: string
 *           enum: ["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"]
 *         description: From City to filter properties
 *       - in: query
 *         name: toCity
 *         schema:
 *           type: string
 *           enum: ["Dehradun","Udaipur","Delhi","Haridwar","Rishikesh","Haldwani"]
 *         description: To City to filter properties
 *       - in: query
 *         name: fromCityLocality
 *         schema:
 *           type: string
 *         description: From City's locality to filter properties
 *       - in: query
 *         name: toCityLocality
 *         schema:
 *           type: string
 *         description: To City's locality to filter properties
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
 *         name: isHandpickedProperty
 *         schema:
 *           type: boolean
 *         description: To filter handpicked properties
 *       - in: query
 *         name: isRecommendedProperty
 *         schema:
 *           type: boolean
 *         description: To filter recommended properties
 *       - in: query
 *         name: propertyStatus
 *         schema:
 *           type: string
 *           enum: ["Approval Pending","Approved"]
 *         description: To filter approved properties
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
 *                   _id:
 *                     type: string
 *                     description: Property ID
 *                   title:
 *                     type: string
 *                     description: Title of the property
 *                   propertyPurpose:
 *                     type: string
 *                     description: Purpose of the property (e.g., Sale or Rent)
 *                   propertyType:
 *                     type: string
 *                     description: Type of property
 *                   city:
 *                     type: string
 *                     description: City of the property
 *                   locality:
 *                     type: string
 *                     description: Locality of the property
 *                   fromCity:
 *                     type: string
 *                     description: From City of the property
 *                   toCity:
 *                     type: string
 *                     description: To City of the property
 *                   fromCityLocality:
 *                     type: string
 *                     description: From City Locality of the property
 *                   toCityLocality:
 *                     type: string
 *                     description: To City Locality of the property
 *                   expectedPrice:
 *                     type: number
 *                     description: Expected price of the property
 *                   dateListed:
 *                     type: string
 *                     format: date-time
 *                     description: Date the property was listed
 *       404:
 *         description: No properties found matching the criteria
 */
router.get('/', propertyController.searchProperty);

module.exports = router;
