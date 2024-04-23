import { config } from "dotenv";
import { apiResponse } from "../apiRespond/apiResponse.js";

config();

const secretoKey = process.env.API_KEY;;
const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
const hostDev = process.env.HOST_DEV || "localhost";
const hostProd = process.env.HOST_PROD_BACK || "rutasdoradas.vercel.app"
const secretoHost = env?.trim() === "production"
  ? `${hostProd}`
  : `${hostDev}:${port}`;
export const isApiKey = (req, res, next) => {
  try {
    const { apikey, host } = req.headers;
    console.log("Api Key ->", apikey);
    console.log("Host ->", host);
    console.log("HostS ->", secretoHost);
    console.log("apiS->", secretoKey);
    if (!apikey) throw new Error("💀 Check authorization");
    if (!host) throw new Error("☠️ Check authorization");
    if (apikey !== secretoKey) throw new Error(" ❌ Api Key not valid");
    if (host !== secretoHost) throw new Error(" ✖️ Host not valid");
    next();
  } catch (error) {
    apiResponse(res, 401, { error: error.message });
  }
};
