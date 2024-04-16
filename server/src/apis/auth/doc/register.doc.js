/**
 * @swagger
 * paths:
 *  /auth/register:
 *   post:
 *    tags:
 *      - Auth Route
 *    summary: Registre the api.
 *    description: Register the api.
 *    operationId: register
 *    requestBody:
 *      description: Register of the app.
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserBasicEntity'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ApiResponse'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/NotFound'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotServer'
 */
