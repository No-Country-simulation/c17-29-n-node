/**
 * @swagger
 * components:
 *  schemas:
 *    BaseEntity:
 *      required:
 *        - id
 *        - createdAt
 *        - updateAt
 *      type: object
 *      description: The base entity
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        createdAt:
 *          type: timestamp
 *          example: 2021-01-01T00:00:00.000Z
 *        updateAt:
 *          type: timestamp
 *          example: 2021-01-01T00:00:00.000Z
 *    UserBasicEntity:
 *      description: The login entity
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: coreo@coreo.com
 *        password:
 *          type: string
 *          example: 1234
 *    Data:
 *      description: The data entity
 *      type: object
 *      properties:
 *        msg:
 *          type: object
 *          example: data
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
 *          example: usuario creado
 *        data:
 *          type: object
 *          example: data{}
 *    NotFound:
 *      type: object
 *      description: Not found
 *      properties:
 *        msg:
 *          type: string
 *          example: Not found
 *    NotServer:
 *      type: object
 *      description: Error in the server
 *      properties:
 *        msg:
 *          type: string
 *          example: Error in the server
 *  parameters:
 *    PageLimit:
 *      name: limit
 *      in: query
 *      description: Limits the number of items on a page
 *      schema:
 *        type: integer
 *    PageOffset:
 *      name: offset
 *      in: query
 *      description: Specifies the page number of the artists to be displayed
 *      schema:
 *        type: integer
 */