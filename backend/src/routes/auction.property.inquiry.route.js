const express = require('express');
const router = express.Router();
const auctionPropertyInquiryController = require('../controllers/auction.property.controller.js');
const auth= require("../middleware/auth.js");

/**
 * @swagger
 * /auction-property-inquiry:
 *   post:
 *     summary: Auction Property Enquiry by User
 *     description: API to send property Enquiry of user to Admin
 *     tags:
 *       - Contact Forms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - propertyId
 *             properties:
 *               propertyId:
 *                 type: string
 *                 description: propertyId
 *     responses:
 *       201:
 *         description: Enquiry mail sent successfully
 *       409:
 *         description: Conflict error (contact form with this phone number already exists)
 *       400:
 *         description: Bad request
 */
router.post('/', auth, auctionPropertyInquiryController.auctionPropertyInquiry);

module.exports = router;
