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
 *        status:
 *          type: string
 *          example: success
 *        description:
 *          type: string
 *          example: ok
 *        data:
 *          type: object
 *          example: { }
 *    notFound:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 404
 *        status:
 *          type: string
 *          example: error
 *        description:
 *          type: string
 *          example: Not found
 *        data:
 *          type: object
 *          example: { }
 *    notServer:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 500
 *        status:
 *          type: string
 *          example: Error
 *        description:
 *          type: string
 *          example: Server error
 *        data:
 *          type: object
 *          example: { }
 */
