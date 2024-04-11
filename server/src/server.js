import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import favicon from "serve-favicon";
import logger from "morgan";
import helmet from "helmet";
import { config } from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import appRouter from "./routers/index.js";
import { connectDB } from "./shared/database/db.js";
import { uploader } from "./shared/multer/multer.js";

config();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "/assets/ico/favicon.ico");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors());
app.use(helmet());
app.use(favicon(root));

app.use("/assets", express.static(join(__dirname, "assets")));

app.post("/api/file", uploader.single("myFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully!");
});

app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(
    `✅ Server 🆗 is running 💯 on http://localhost:${PORT}/api/docs`
  );
  connectDB();
});
