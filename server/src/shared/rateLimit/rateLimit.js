import { rateLimit } from "express-rate-limit";

const ENV = process.env.NODE_ENV || "development";

const allowedOrigins = [
  "localhost:3000",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
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
    if (ENV === "development") {
      console.log("skip host", req.get("host"));
      const host = req.get("host");
      return allowedOrigins.includes(host);
    } else {
      return true;
    }
  },
});
