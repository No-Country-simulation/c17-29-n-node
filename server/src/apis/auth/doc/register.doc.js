/**
 * @swagger
 * paths:
 *  /auth/register:
 *   post:
 *    tags:
 *      - Auth Routes
 *    summary: Registre the api.
 *    description: Register the api.
 *    operationId: register
 *    requestBody:
 *      description: Register of the app.
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/body/user'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/responses/apiResponse'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/responses/notFound'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/responses/notServer'
 *    security:
 *      - apiKeyAuth: []
 */
