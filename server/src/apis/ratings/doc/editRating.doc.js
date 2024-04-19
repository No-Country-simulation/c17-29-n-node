/**
 * @swagger
 * paths:
 *  /ratings/{:id}:
 *    put:
 *      tags:
 *        - Rating Routes
 *      summary: Edit rating.
 *      description: Edit ratings.
 *      operationId: updateRating
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *       description: rating of the api.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/ratingEdit'
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
