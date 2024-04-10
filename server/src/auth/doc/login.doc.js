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
 *  /login:
 *   post:
 *    tags:
 *      - Auth Route
 *    summary: login of the api.
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *         application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Login'
 *      404:
 *        description: Not Found
 *        content:
 *         application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/NotFound'
 *      500:
 *        description: Internal Server Error
 *        content:
 *         application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/NotServer'
 */
