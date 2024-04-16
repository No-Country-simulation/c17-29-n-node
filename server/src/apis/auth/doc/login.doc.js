/**
 * @swagger
 * paths:
 *  /auth/login:
 *    post:
 *     tags:
 *      - Auth Route
 *     summary: login of the app.
 *     description: login of the app.
 *     operationId: login
 *     requestBody:
 *       description: login of the app.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/raw'
 *     responses:
 *       200:
 *         description: Successful operation
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
 */