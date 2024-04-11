import express from "express";
import logger from "morgan";
import favicon from "serve-favicon";
import serverRouter from "./routers/index.js";
import { config } from "dotenv";
import { dirname, join } from "path";
import { connectDB } from "./shared/database/db.js";
import { fileURLToPath } from "url";
import { uploader } from "./shared/multer/multer.js";

config();
const server = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger("dev"));
server.use("/assets", express.static(join(__dirname, "assets")));

server.use(favicon(join(__dirname, "/assets/ico/favicon.ico")));

server.post("/file", uploader.single("myFile"), (req, res) => {
  res.send("Image uploaded");
});

server.use(serverRouter);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`✅ Server 🆗 is running 💯 on http://localhost:${PORT}/api/docs`);
  connectDB();
});
