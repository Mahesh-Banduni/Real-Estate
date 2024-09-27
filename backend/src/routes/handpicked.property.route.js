const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/property.controller');

/**
 * @swagger
 * /handpicked-properties:
 *   get:
 *     summary: Handpicked properties
 *     description: Retrieve a list of handpicked properties filtered by the purpose (e.g., Sale or Rent) and additional query parameters
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: propertyPurpose
 *         schema:
 *           type: string
 *         description: Purpose of the property (e.g., Sale or Rent)
 *       - in: query
 *         name: propertyType
 *         schema:
 *           type: string
 *         description: Type of property (e.g., Residential, Commercial)
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: City to filter properties
 *       - in: query
 *         name: locality
 *         schema:
 *           type: string
 *         description: Locality to filter properties
 *       - in: query
 *         name: From City
 *         schema:
 *           type: string
 *         description: From City to filter properties
 *       - in: query
 *         name: To City
 *         schema:
 *           type: string
 *         description: To City to filter properties
 *       - in: query
 *         name: From City's locality
 *         schema:
 *           type: string
 *         description: From City's locality to filter properties
 *       - in: query
 *         name: To City's locality
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
 *       404:
 *         description: No properties found matching the criteria
 */
router.get('', propertyController.handpickedProperty);

module.exports = router;
