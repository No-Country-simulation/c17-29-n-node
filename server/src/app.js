import express from "express";

import logger from "morgan";
import cookieParser from "cookie-parser";
import favicon from 'serve-favicon';
import appRouter from "./routers/index.js";
import { uploader } from "./utils/multer.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { connectDB } from "./database/db.js";
import { config } from "dotenv";



// TODO: Implement route creation and CRUD API logic

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "/assets/ico", "favicon.ico");

config()

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(logger("dev"));
app.use(cookieParser());

app.use(favicon(root));
app.post("/file", uploader.single("myFile"), (req, res) => {
  res.send("Image uploaded");
});

app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`✅ Server 🆗 is running 💯 on http://localhost:${PORT}`);
  connectDB();
});
