import { config } from "dotenv";
import { apiResponse } from "../apiRespond/apiResponse.js";

config();

const secretoKey = process.env.API_KEY;

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
const hostDev = process.env.HOST_DEV || "localhost";
const hostProdBack = process.env.HOST_PROD_BACK || "rutasdoradasback.vercel.app"
const hostProdFront = process.env.HOST_PROD_FRONT || "rutasdoradasback.vercel.app"

const servesHots = [
  `https://${hostProdFront}`,
  `https://${hostProdBack}`,
];
const secretHost = env?.trim() === "production"
  ? servesHots
  : `${hostDev}:${port}`;
export const isApiKey = (req, res, next) => {
  try {
    const { apikey, host } = req.headers;
    if (!apikey) throw new Error("400:☠️ Check Api Key");
    if (!host) throw new Error("400 :☠️ Check Host");
    if (apikey !== secretoKey) throw new Error("401:❌ Api Key not valid");
    if (!secretHost.includes(host)) throw new Error("402:✖️ Host not valid");
    next();
  } catch (error) {
    console.log("Error code->", +(error.message.split(":")[0]));
    console.log("Error message->", error.message.split(":")[1]);
    apiResponse(res, +(error.message.split(":")[0]), {
      error: error.message.split(":")[1],
    });
  }
};