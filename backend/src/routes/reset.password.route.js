const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const userLoginController = require("../controllers/user.login.controller.js");
const auth = require("../middleware/auth.js");

/**
 * @swagger
 * /reset-password:
 *   put:
 *     summary: Reset User Password
 *     description: Reset user's password
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: Reset user's new password
 *               confirmNewPassword:
 *                 type: string
 *                 description: Reset user's confirm new password
 *     responses:
 *       200:
 *         description: User password has been reset successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 */
router.put("/", auth, userController.resetPassword);

module.exports = router;
