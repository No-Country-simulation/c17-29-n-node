import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import favicon from "serve-favicon";
import appRouter from "./routers/index.js";
import { config } from "dotenv";
import { dirname, join } from "path";
import { connectDB } from "./shared/database/db.js";
import { controller, middleware } from "./config/sawgger/swagger.config.js";
import { uploader } from "./shared/multer/multer.js";
import { fileURLToPath } from "url";
config();

const app = express();
const PORT = process.env.PORT || 3000;
const root = join(
  dirname(fileURLToPath(import.meta.url)),
  "/assets/ico/favicon.ico"
);

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(logger("dev"));
app.use(cookieParser());
app.post("/file", uploader.single("myFile"), (req, res) => {
  res.send("Image uploaded");
});
app.use(favicon(root));
app.use("/docs", middleware, controller);
app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`✅ Server 🆗 is running 💯 on http://localhost:${PORT}/docs`);
  connectDB();
});
