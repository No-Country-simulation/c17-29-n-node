
/**
 *  @swagger
 * components:
 *  schemas:
 *    Invalid:
 *      description: The Invalid Router
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
 *  /*:
 *    get:
 *      tags:
 *        - Invalid Route
 *      summary:
 *        the Invalid router api.
 *      description:
 *        the Invalid router api.
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Invalid'
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
