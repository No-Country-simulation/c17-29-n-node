/**
 *  @swagger
 * paths:
 *  /users/create:
 *    post:
 *      tags:
 *        - User Routes
 *      summary: Create User.
 *      description: Create User
 *      operationId: postUser
 *      requestBody:
 *       description: Create User.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/user'
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
 */
