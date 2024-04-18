/**
 * @swagger
 * paths:
 *  /auth/login:
 *    post:
 *     tags:
 *      - Auth Routes
 *     summary: Login of the app.
 *     description: Login of the app.
 *     operationId: login
 *     requestBody:
 *       description: login of the app.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/user'
 *     responses:
 *       200:
 *         description: Successful operation
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
 */