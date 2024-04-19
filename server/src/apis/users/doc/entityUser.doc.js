/**
 * @swagger
 * components:
 *  schemas:
 *    userEntity:
 *      description: User entity
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          example: test
 *        email:
 *          type: string
 *          example: test@test.com
 *        password:
 *          type: string
 *          example: 1234
 *        age:
 *          type: integer
 *          format: int32
 *          example: 20
 *        phoneNumber:
 *          type: integer
 *          format: int64
 *          example: 123456789
 *        role:
 *          type: string
 *          enum:
 *            - user
 *            - admin
 *          example: user
 *        isActive:
 *          type: boolean
 *          example: false
 */