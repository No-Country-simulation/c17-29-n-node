/**
 * @swagger
 * paths:
 *  /travels:
 *    post:
 *      tags:
 *        - Travel Routes
 *      summary: Create Travel.
 *      description: Create Travel
 *      operationId: startCreateTravel
 *      requestBody:
 *       description: Create Travel.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/travelEntity'
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
 *      security:
 *        - bearerAuth: []
 */
