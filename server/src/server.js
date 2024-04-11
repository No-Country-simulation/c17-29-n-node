import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { config } from "dotenv";
import { appRouter } from "./routers/index.js";
import { connectDB } from "./shared/database/db.js";
import { apiLimiter } from "./shared/rateLimit/rateLimit.js";

config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors());
app.use(helmet());
app.use(apiLimiter);

app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.error('Error starting server',err);
  console.log(
    `✅ Server 🆗 is running 💯 on http://localhost:${PORT}/api/docs`
  );
  connectDB();
});
