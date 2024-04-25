import { rateLimit } from "express-rate-limit";
import { config } from "dotenv";
import MongoStore from "rate-limit-mongo";
import { apiResponse } from "../apiRespond/apiResponse.js";

config();

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
const hostDev = process.env.HOST_DEV || "localhost";

const allowedOrigins = [`127.0.0.1:${port}`, `http://127.0.0.1:${port}`];

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // 10 requests per IP
  message: async (req, res) => {
    apiResponse(res, 429, {
      error: "Too many requests from this IP, please try again later.",
    });
  },
  statusCode: 429,
  standardHeaders: true,
  keyGenerator: async (req) => {
    if (req.ip) {
      const ip = req.ip.toString().split(":")[req.ip.length - 1];
      console.log("IP->", ip);
      return ip;
    }
  },
  requestPropertyName: "req",
  legacyHeaders: false,
  skip: (req) => {
    if (env === "development") {
      return allowedOrigins.includes(req.get("host"));
    } else {
      return false;
    }
  },
  store: new MongoStore({
    uri: process.env.URL_MONGO,
    user: process.env.USER_MONGO,
    password: process.env.PASS_MONGO,
    // should match windowMs
    expireTimeMs: 15 * 60 * 1000,
    errorHandler: console.error.bind(null, "rate-limit-mongo"),
    // see Configuration section for more options and details
  }),
});
