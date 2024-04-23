import { rateLimit } from "express-rate-limit";
import { config } from "dotenv";

config();

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
const hostDev = process.env.HOST_DEV || "localhost";

const allowedOrigins = [
  `${hostDev}:${port}`,
  `http://${hostDev}:${port}`,
  `127.0.0.1:${port}`,
  `http://127.0.0.1:${port}`,
];

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 100 requests per IP
  message: "Too many requests from this IP, please try again later.",
  statusCode: 429,
  standardHeaders: true,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    console.log("ip", req.ip);
    return req.ip;
  },
  requestPropertyName: "req",
  legacyHeaders: false,
  skip: (req) => {
    if (env === "development") {
      console.log("skip host", req.get("host"));
      const host = req.get("host");
      return allowedOrigins.includes(host);
    } else {
      return true;
    }
  },
});
