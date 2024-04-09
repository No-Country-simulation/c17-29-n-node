
/**
 *  @swagger
 * components:
 *  schemas:
 *    Data:
 *      description: The data entity
 *      type: object
 *      properties:
 *        error:
 *          type: object
 *          description: error message
 *      required:
 *      notRequired:
 *      example:
 *        data:
 *          error: 💀 Ruta no valida ☠️.
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
 *          error: 💀 Ruta no valida ☠️.
 *        timestamp: 1712613566149
 */

/**
 * @swagger
 *  /:
 *    get:
 *      tags: [start]
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
