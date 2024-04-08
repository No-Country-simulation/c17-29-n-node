import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";

const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;
const theme = new SwaggerTheme();
const darkStyle = theme.getBuffer(SwaggerThemeNameEnum.DARK);
const serverUrl =
  env?.trim() === "production"
    ? "https://c17-29-n-node.vercel.app/{basePath}"
    : `http://localhost:${port}/{basePath}`;

const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api del equipo c17-29-ft-node-react",
      summary: "Un Sistema de Viajes",
      description: "Sistema De Viajes <br /><br />By",
      termsOfService: "http://swagger.io/terms/",
      contact: {
        name: "c17-29-ft-node-react",
        url: "https://no-country.slack.com/archives/C06QWRDCA13",
        email: "c17node29@gmail.com@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/license/mit/",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: serverUrl,
        description:
          "The server api environment " +
          (env?.trim() === "production" ? "production" : "development"),
        variables: {
          basePath: {
            enum: [
              "",
              "api"
            ],
            default: "",
            description: "this value is assigned by the service provider",
          },
        },
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  apis: ["src/*/doc/*.doc.js"],
};

const swaggerOptions = {
  explorer: true,
  swaggerUi: true,
  docExpansion: "list",
  filter: true,
  customSiteTitle: "Api Rest Full Dynamic",
  customCss: `${darkStyle} .swagger-ui .topbar {display: none;}`,
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
  customfavIcon: "https://i.imgur.com/fPaQMKf.png",
};

const config = swaggerJsDoc(swaggerConfig);
export const middleware = swaggerUI.serve;
export const controller = swaggerUI.setup(config, swaggerOptions);
