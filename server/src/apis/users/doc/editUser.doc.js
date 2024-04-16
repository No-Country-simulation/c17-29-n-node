/**
 * @swagger
 * paths:
 *  /users/edit/{:id}:
 *    patch:
 *      tags:
 *        - Users Route
 *      summary: Edit User.
 *      description: Edit Users.
 *      operationId: ediUser
 *      parameters:
 *        - $ref: '#/components/parameters/Id'
 *      requestBody:
 *       description: login of the app.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/edit'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/ApiResponse'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/NotFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/NotServer'
 *      security:
 *        - bearerAuth: []
 */
