const express = require('express');
const router = express.Router();
const propertyInquiryController = require('../controllers/property.controller.js');
const auth= require("../middleware/auth.js");
const { inquiryLimiter } = require("../middleware/rate.limitter.js");


/**
 * @swagger
 * /property-inquiry:
 *   post:
 *     summary: Property Enquiry by User
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
router.post('/', inquiryLimiter, auth, propertyInquiryController.propertyInquiry);

module.exports = router;
