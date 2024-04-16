/**
 *  @swagger
 * paths:
 *  /users/{:id}:
 *    get:
 *      tags:
 *        - User Routes
 *      summary: User By Id.
 *      description: Users By Id
 *      operationId: getUserById
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
 */
