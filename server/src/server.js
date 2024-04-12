import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { config } from "dotenv";
import { serverRouter } from "./routers/index.js";
import { connectDB } from "./shared/database/db.js";
import { apiLimiter } from "./shared/rateLimit/rateLimit.js";
import { corsConfig } from "./config/cors/cors.config.js";
import { helmetConfig } from "./config/helmet/helmet.config.js";

config();

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extends: true }));
server.use(cookieParser());
server.use(logger("dev"));
server.use(cors(corsConfig));
server.use(helmet(helmetConfig));
server.use(apiLimiter);

server.use(serverRouter);

server.listen(PORT, (err) => {
  if (err) console.error('Error starting server',err);
  console.log(
    `✅ Server 🆗 is running 💯 on http://localhost:${PORT}/api/docs`
  );
  connectDB();
});
