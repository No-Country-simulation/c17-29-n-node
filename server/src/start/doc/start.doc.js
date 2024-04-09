
/**
 *  @swagger
 * components:
 *  schemas:
 *
 *    Start:
 *      description: The user entity
 *      type: object
 *      properties:
 *        uptime:
 *          type: string
 *          description: time up
 *        data:
 *          $ref: '#/components/schemas/Data'
 *        timestamp:
 *          type: string
 *          description: time the server
 *      required:
 *      notRequired:
 *      example:
 *        uptime: 264.0613527,
 *        data:
 *           msg: ✅ Api 🆗 online 💯 % ✨
 *        timestamp: 1712613566149
 */

/**
 * @swagger
 *  /start:
 *    get:
 *      tags: [Start Route]
 *      summary: start api.
 *      description:
 *        Start api.
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
