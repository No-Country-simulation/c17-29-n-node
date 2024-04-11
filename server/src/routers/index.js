import express from "express";
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { controller, middleware } from "../shared/sawgger/swagger.config.js";
import { invalidRouter } from "../apis/invalid/router/invalid.router.js";
import { startRouter } from "../apis/start/router/start.router.js";
import { authRoutes } from "../apis/auth/router/auth.router.js";
import { userRoutes } from "../apis/users/router/user.router.js";
import { uploader } from "../shared/multer/multer.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

router.use("/assets", express.static(join(root, "assets")));

router.post("/api/file", uploader.single("myFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully!");
});

router.use(favicon(join(root, "assets/ico/favicon.ico")));
router.use("/api/docs", middleware, controller);
router.use("/api/start", startRouter);
router.use("/api/users", userRoutes);
router.use("/api/auth", authRoutes);
router.use("/api", invalidRouter);

export default router;
