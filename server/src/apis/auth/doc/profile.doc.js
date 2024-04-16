/**
 * @swagger
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
 *             $ref: '#/components/responses/ApiResponse'
 *       404:
 *         description: Not Found
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/responses/NotFound'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/responses/NotServer'
 *     security:
 *       - bearerAuth: []
 */
