
/**
 *  @swagger
 * components:
 *  schemas:
 *    Users:
 *      description: The user entity
 *      type: object
 *      properties:
 *        uptime:
 *          type: string
 *          example: 264.0613527
 *        data:
 *          $ref: '#/components/schemas/Data'
 *        timestamp:
 *          type: string
 *          example: 1712613566149
 * paths:
 *  /users:
 *    get:
 *      tags:
 *        - Users Route
 *      summary: Users api.
 *      description:
 *        Users api.
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Start'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotServer'
 */
