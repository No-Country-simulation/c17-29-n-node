import express from "express";
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { controller, middleware } from "../config/swagger/swagger.config.js";
import { invalidRouter } from "../apis/invalid/router/invalid.router.js";
import { startRouter } from "../apis/start/router/start.router.js";
import { authRoutes } from "../apis/auth/router/auth.router.js";
import { userRoutes } from "../apis/users/router/user.router.js";
import { uploader } from "../shared/multer/multer.js";
import { carRouter } from "../apis/cars/router/car.router.js";

export const serverRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

serverRouter.use("/assets", express.static(join(root, "assets")));

serverRouter.post("/api/file", uploader.single("myFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully!");
});

serverRouter.use(favicon(join(root, "assets/ico/favicon.ico")));
serverRouter.use("/api/docs", middleware, controller);
serverRouter.use("/api/start", startRouter);
serverRouter.use("/api/users", userRoutes);
serverRouter.use("/api/auth", authRoutes);
serverRouter.use("/api/cars", carRouter);
serverRouter.use("/api", invalidRouter);
serverRouter.use("/", invalidRouter);
