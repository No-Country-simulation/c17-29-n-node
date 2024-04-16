/**
 * @swagger
 * components:
 *  parameters:
 *    pageLimit:
 *      name: limit
 *      in: query
 *      description: Limits the number of items on a page
 *      schema:
 *        type: integer
 *    pageOffset:
 *      name: offset
 *      in: query
 *      description: Specifies the page number of the artists to be displayed
 *      schema:
 *        type: integer
 *    id:
 *      name: :id
 *      in: path
 *      description: Id User
 *      required: true
 *      schema:
 *        type: string
 */