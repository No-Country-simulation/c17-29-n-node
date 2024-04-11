import express from "express";
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { controller, middleware } from "../config/sawgger/swagger.config.js";
import { invalidRouter } from "../apis/invalid/router/invalid.router.js";
import { startRouter } from "../apis/start/router/start.router.js";
import { authRoutes } from "../apis/auth/router/auth.router.js";
import { userRoutes } from "../apis/users/router/user.router.js";
import { uploader } from "../shared/multer/multer.js";

export const appRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

appRouter.use("/assets", express.static(join(root, "assets")));

appRouter.post("/api/file", uploader.single("myFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully!");
});

appRouter.use(favicon(join(root, "assets/ico/favicon.ico")));
appRouter.use("/docs", middleware, controller);
appRouter.use("/api/start", startRouter);
appRouter.use("/api/users", userRoutes);
appRouter.use("/api/auth", authRoutes);
appRouter.use("/api", invalidRouter);
appRouter.use("/", invalidRouter);
