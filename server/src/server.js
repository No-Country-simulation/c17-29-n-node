import express from "express";
import logger from "morgan";
import favicon from "serve-favicon";
import appRouter from "./routers/index.js";
import { config } from "dotenv";
import { dirname, join } from "path";
import { connectDB } from "./shared/database/db.js";
import { fileURLToPath } from "url";
import { uploader } from "./shared/multer/multer.js";
config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(logger("dev"));

app.use(favicon(join(__dirname, "/assets/ico/favicon.ico")));

app.post("/file", uploader.single("myFile"), (req, res) => {
  res.send("Image uploaded");
});

app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`✅ Server 🆗 is running 💯 on http://localhost:${PORT}/api/docs`);
  connectDB();
});
