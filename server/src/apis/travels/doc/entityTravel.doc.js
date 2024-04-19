/**
 * @swagger
 * components:
 *  schemas:
 *    travelEntity:
 *      description: User entity
 *      type: object
 *      required:
 *        - user
 *        - car
 *        - driver
 *        - numberSeatsAvailable
 *        - date
 *        - tripDistance
 *        - hometown
 *        - provinceOrigin
 *        - sourceAddress
 *        - departureTime
 *        - arrivalCity
 *        - provinceArrival
 *        - arrivalAddress
 *        - checkIn
 *        - isActive
 *      properties:
 *        user:
 *          type: string
 *          example: id_User
 *        car:
 *          type: string
 *          example: id_Car
 *        driver:
 *          type: string
 *          example: id_Users
 *        passenger:
 *          type: string
 *          example: idUsers
 *        numberSeatsAvailable:
 *          type: integer
 *          format: int32
 *          example: 4
 *        numberSeatsOccupied:
 *          type: integer
 *          format: int32
 *          example: 0
 *        date:
 *          type: string
 *          example: 14-12-2023
 *        tripDistance:
 *          type: number
 *          format: int64
 *          example: 234
 *        hometown:
 *          type: string
 *          example: Buenos Aires
 *        provinceOrigin:
 *          type: string
 *          example: Bahia Blanca
 *        sourceAddress:
 *          type: string
 *          example: San Martin 1245
 *        departureTime:
 *          type: string
 *          example: 10:00
 *        arrivalCity:
 *          type: string
 *          example: Neuquen
 *        provinceArrival:
 *          type: string
 *          example: Neuquen
 *        arrivalAddress:
 *          type: string
 *          example: Av. Rivadavia 123
 *        checkIn:
 *          type: string
 *          example: 14:00
 *        seatCost:
 *          type: number
 *          format: float
 *          example: 5000.00
 *        isActive:
 *          type: boolean
 *          example: true
 */
