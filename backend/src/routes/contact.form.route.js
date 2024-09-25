const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contact.form.controller');

/**
 * @swagger
 * /contact-forms:
 *   post:
 *     summary: Submit a new contact form
 *     description: API to create a new contact form entry
 *     tags:
 *       - Contact Forms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - phone
 *               - message
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Full name of the person
 *               phone:
 *                 type: string
 *                 description: Phone number of the person
 *               email:
 *                 type: string
 *                 description: Email address (optional)
 *               message:
 *                 type: string
 *                 description: The message sent via the contact form
 *     responses:
 *       201:
 *         description: Contact form created successfully
 *       409:
 *         description: Conflict error (contact form with this phone number already exists)
 *       400:
 *         description: Bad request
 */
router.post('/', contactFormController.createContactForm);

/**
 * @swagger
 * /contact-forms:
 *   get:
 *     summary: Get all contact forms
 *     description: Retrieve a list of all contact forms
 *     tags:
 *       - Contact Forms
 *     responses:
 *       200:
 *         description: List of contact forms retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Contact form ID
 *                   fullName:
 *                     type: string
 *                     description: Full name of the person
 *                   phone:
 *                     type: string
 *                     description: Phone number of the person
 *                   message:
 *                     type: string
 *                     description: The message sent via the contact form
 *       500:
 *         description: Internal server error
 */
router.get('/', contactFormController.getAllContactForms);

/**
 * @swagger
 * /contact-forms/{fullName}:
 *   get:
 *     summary: Get contact form by full name
 *     description: Retrieve a contact form by full name
 *     tags:
 *       - Contact Forms
 *     parameters:
 *       - in: path
 *         name: fullName
 *         required: true
 *         schema:
 *           type: string
 *         description: Full name of the person who submitted the contact form
 *     responses:
 *       200:
 *         description: Contact form retrieved successfully
 *       404:
 *         description: Contact form not found
 */
router.get('/:fullName', contactFormController.getContactFormByFullName);

/**
 * @swagger
 * /contact-forms/{id}:
 *   delete:
 *     summary: Delete contact form by ID
 *     description: Delete a contact form by its ID
 *     tags:
 *       - Contact Forms
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact form ID
 *     responses:
 *       200:
 *         description: Contact form deleted successfully
 *       404:
 *         description: Contact form not found
 */
router.delete('/:id', contactFormController.deleteContactForm);

module.exports = router;
