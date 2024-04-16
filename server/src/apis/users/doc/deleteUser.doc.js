/**
 * @swagger
 * paths:
 *  /users/delete/{:id}:
 *    delete:
 *      tags:
 *        - Users Route
 *      summary: Delete User.
 *      description: Delete Users.
 *      operationId: deleteUser
 *      parameters:
 *        - $ref: '#/components/parameters/Id'
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
