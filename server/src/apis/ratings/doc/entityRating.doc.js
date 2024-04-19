/**
 * @swagger
 * components:
 *  schemas:
 *    ratingEntity:
 *      description: User entity
 *      type: object
 *      required:
 *        - raterId
 *        - rateeId
 *        - rating
 *        - isActive
 *      properties:
 *        raterId:
 *          type: string
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        rateeId:
 *          type: string
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        rating:
 *          type: integer
 *          format: int32
 *          example: 3
 *        isActive:
 *          type: boolean
 *          example: true
 */