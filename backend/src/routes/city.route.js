const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city.controller.js');

/**
 * @swagger
 * /cities-localities:
 *   post:
 *     summary: Create a new city with localities
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - state
 *               - localities
 *             properties:
 *               name:
 *                 type: string
 *               state:
 *                 type: string
 *               localities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: The created city and localities
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 state:
 *                   type: string
 *                 localities:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       cityId:
 *                         type: string
 */
router.post('/', cityController.createCityWithLocalities);

/**
 * @swagger
 * /cities-localities:
 *   get:
 *     summary: Search for cities
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: The search term for city names
 *       - in: query
 *         name: locality
 *         schema:
 *           type: string
 *         description: The search term for localities names
 *     responses:
 *       200:
 *         description: The search results
 *       500:
 *         description: Server error
 */
router.get('', cityController.searchCitiesLocalities);

module.exports = router;