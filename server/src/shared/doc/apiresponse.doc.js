/**
 * @swagger
 * components:
 *  responses:
 *    apiResponse:
 *      description: The Api responde entity
 *      type: object
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 200
 *        type:
 *          type: string
 *          example: success
 *        msg:
 *          type: string
 *          example: created successfully
 *        data:
 *          type: object
 *          example: data{}
 *    notFound:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 404
 *        type:
 *          type: string
 *          example: Error
 *        msg:
 *          type: string
 *          example: Invalid credentials
 *        data:
 *          type: object
 *          example: data{}
 *    notServer:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 500
 *        type:
 *          type: string
 *          example: Error
 *        msg:
 *          type: string
 *          example: Server error
 *        data:
 *          type: object
 *          example: data{}
 */