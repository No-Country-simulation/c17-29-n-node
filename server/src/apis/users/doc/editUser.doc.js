/**
 * @swagger
 * paths:
 *  /users/{:id}:
 *    put:
 *      tags:
 *        - User Routes
 *      summary: Edit User.
 *      description: Edit Users.
 *      operationId: ediUser
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *       description: User of the api.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/userEdit'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/apiResponse'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notServer'
 *      security:
 *        - apiKeyAuth: []
 *        - bearerAuth: []
 */
