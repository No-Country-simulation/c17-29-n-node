/**
 * @swagger
 * components:
 *  responses:
 *    ApiResponse:
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
 *    NotFound:
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
 *    NotServer:
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