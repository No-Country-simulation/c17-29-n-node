/**
 * @swagger
 * paths:
 *  /auth/profile:
 *    get:
 *     tags:
 *       - Auth Routes
 *     summary: profile the user.
 *     description: profile the user.
 *     operationId: Profile
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/responses/apiResponse'
 *       404:
 *         description: Not Found
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/responses/notFound'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/responses/notServer'
 *     security:
 *       - bearerAuth: []
 */
