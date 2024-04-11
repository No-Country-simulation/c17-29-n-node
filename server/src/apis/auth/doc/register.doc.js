/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       required:
 *         - email
 *         - password
 *       type: object
 *       properties:
 *         ref: '#/components/schemas/baseEntity'
 *         name:
 *           type: string
 *           example: usuario1
 *         email:
 *           type: string
 *           unique: true
 *           example: coreo@coreo.com
 *         password:
 *           type: string
 *           example: 1712613566149
 *         age:
 *           type: integer
 *           format: int64
 *           example: 18
 *         phoneNumber:
 *           type: integer
 *           format: int64
 *           example: 3123456789
 * paths:
 *  /register:
 *   post:
 *    tags:
 *      - Auth Route
 *    summary: Registre the api.
 *    description: Register the api.
 *    operationId: registerUser
 *    requestBody:
 *      description: Register of the app.
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register'
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
 *    security:
 *      - api_auth:
 *        - write:api
 *        - read:api
 */
