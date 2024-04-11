/**
 * @swagger
 * components:
 *  schemas:
 *    Profile:
 *      description: The user profile entity
 *      type: object
 *      properties:
 *        uptime:
 *          type: string
 *        data:
 *          $ref: '#/components/schemas/Data'
 *        timestamp:
 *          type: string
 * paths:
 *  /profile:
 *   get:
 *     tags:
 *       - Auth Route
 *     summary: profile router api.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Start'
 *       404:
 *         description: Not Found
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/NotFound'
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/NotServer'
 */
