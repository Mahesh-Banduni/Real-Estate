const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property.controller.js");
const { upload } = require("../middleware/multer.js");
const auth = require("../middleware/auth.js");

/**
 * @swagger
 * /properties:
 *   post:
 *     summary: Create a new property
 *     description: API to create a new property listing
 *     tags:
 *       - Properties
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               propertyPurpose:
 *                 type: string
 *                 description: Purpose of the property.
 *               propertyType:
 *                 type: string
 *                 description: Type of the property.
 *               city:
 *                 type: string
 *                 description: City of the property.
 *               locality:
 *                 type: string
 *                 description: Locality of the property.
 *               fromCity:
 *                 type: string
 *                 description: From City of the property.
 *               toCity:
 *                 type: string
 *                 description: To City of the property.
 *               expectedPrice:
 *                 type: number
 *                 description: Expected price of the property.
 *               description:
 *                 type: string
 *                 description: Description of the property.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Images of the property (up to 10 images).
 *     responses:
 *       201:
 *         description: Property created successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal server error
 */
router.post("/", upload, auth, propertyController.createProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Get property by ID
 *     description: Retrieve a property by its ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property retrieved successfully
 *       404:
 *         description: Property not found
 */
router.get("/:id", propertyController.getPropertyById);

/**
 * @swagger
 * /properties/{id}:
 *   put:
 *     summary: Update property by ID
 *     description: Update a property's information by its ID (only description, price, images, and isAvailable can be updated)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Updated property description
 *               price:
 *                 type: string
 *                 description: Updated property price
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of updated image URLs
 *               isAvailable:
 *                 type: boolean
 *                 description: Updated availability status of the property
 *     responses:
 *       200:
 *         description: Property updated successfully
 *       404:
 *         description: Property not found
 */
router.put("/:id", propertyController.updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     summary: Delete property by ID
 *     description: Delete a property listing by its ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
 *       404:
 *         description: Property not found
 */
router.delete("/:id", propertyController.deleteProperty);

/**
 * @swagger
 * /properties/{id}/mark-handpicked:
 *   put:
 *     summary: Mark a property as handpicked
 *     description: Mark a specific property as handpicked (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property marked as handpicked
 *       400:
 *         description: Only admins can mark properties as handpicked
 */
router.put("/:id/mark-handpicked", propertyController.markHandpickedProperty);

/**
 * @swagger
 * /properties/{id}/unmark-handpicked:
 *   put:
 *     summary: Unmark a property as handpicked
 *     description: Unmark a specific property as handpicked (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property Unmarked as handpicked
 *       400:
 *         description: Only admins can Unmark properties as handpicked
 */
router.put(
  "/:id/unmark-handpicked",
  propertyController.unmarkHandpickedProperty
);

/**
 * @swagger
 * /properties/{id}/mark-approved:
 *   put:
 *     summary: Mark a property as approved
 *     description: Mark a specific property as approved (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property marked as approved
 *       400:
 *         description: Only admins can mark properties as approved
 */
router.put("/:id/mark-approved", propertyController.markApprovedProperty);

/**
 * @swagger
 * /properties/{id}/unmark-approved:
 *   put:
 *     summary: Mark a property as approval pending
 *     description: Mark a specific property as approval pending (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property marked as approval pending
 *       400:
 *         description: Only admins can mark properties as approval pending
 */
router.put("/:id/unmark-approved", propertyController.unmarkApprovedProperty);

/**
 * @swagger
 * /properties/{id}/mark-recommended:
 *   put:
 *     summary: Mark a property as recommended
 *     description: Mark a specific property as recommended (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property marked as recommended
 *       400:
 *         description: Only admins can mark properties as recommended
 */
router.put("/:id/mark-recommended", propertyController.markRecommendedProperty);

/**
 * @swagger
 * /properties/{id}/unmark-recommended:
 *   put:
 *     summary: Mark a property as not recommended
 *     description: Mark a specific property as not recommended (admin only)
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *     responses:
 *       200:
 *         description: Property marked as not recommended
 *       400:
 *         description: Only admins can mark properties as not recommended
 */
router.put(
  "/:id/unmark-recommended",
  propertyController.unmarkRecommendedProperty
);

module.exports = router;
