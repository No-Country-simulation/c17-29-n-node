
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    api_auth:
 *      type: oauth2
 *      flows:
 *        implicit:
 *          authorizationUrl: https://petstore3.swagger.io/oauth/authorize
 *          scopes:
 *            write:api: modify app in your account
 *            read:api: read your app
 *    api_key:
 *       type: apiKey
 *       name: api_key
 *       in: header
 */