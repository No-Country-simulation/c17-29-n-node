/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      required:
 *        - email
 *        - password
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: coreo@coreo.com
 *        password:
 *          type: string
 *          example: 1234
 * paths:
 *  /auth/login:
 *   post:
 *    tags:
 *      - Auth Route
 *    summary: login of the app.
 *    description: login of the app.
 *    operationId: login
 *    requestBody:
 *      description: login of the app.
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: Successful operation
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *      404:
 *        description: Not Found
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/NotFound'
 *      500:
 *        description: Internal Server Error
 *        content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/NotServer'
 *    security:
 *      - api_auth:
 *         - write:api
 *         - read:api
 */
