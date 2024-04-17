/**
 * @swagger
 * paths:
 *  /travels/{:id}:
 *    put:
 *      tags:
 *        - Travel Routes
 *      summary: Edit Travel..
 *      description: Edit Travel.
 *      operationId: updateTravelModel
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *       description: login of the app.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/travelEdit'
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
