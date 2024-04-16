/**
 * @swagger
 * security:
 *   - bearerAuth: []
 * paths:
 *  /auth/profile:
 *    get:
 *     tags:
 *       - Auth Route
 *     summary: profile the user.
 *     description: profile the user.
 *     operationId: Profile
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Not Found
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/NotFound'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/NotServer'
 *     security:
 *       - bearerAuth: []
 */
