/**
 * @swagger
 * components:
 *  schemas:
 *    Register:
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
 *  /register:
 *    post:
 *      tags:
 *        - Auth Route
 *      summary: start api.
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Register'
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
