import express from "express";
import logger from "morgan";
import favicon from "serve-favicon";
import appRouter from "./routers/index.js";
import { config } from "dotenv";
import { join } from "path";
import { dirNamePath } from "./shared/dirNamePath/dirNamePath.js";
import { connectDB } from "./shared/database/db.js";
//import { uploader } from "./shared/multer/multer.js";
//import { controller, middleware } from "./config/sawgger/swagger.config.js";
config();

const app = express();
const PORT = process.env.PORT || 3000;
const root = join(dirNamePath, "/assets/ico/favicon.ico");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(logger("dev"));
/*app.post("/file", uploader.single("myFile"), (req, res) => {
  res.send("Image uploaded");
});*/
app.use(favicon(root));
//app.use("/docs", middleware, controller);
app.use(appRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`✅ Server 🆗 is running 💯 on http://localhost:${PORT}/docs`);
  connectDB();
});
