import express from "express";
import favicon from "serve-favicon";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { controller, middleware } from "../config/swagger/swagger.config.js";
import { authRoutes } from "../apis/auth/router/auth.router.js";
import { carRouter } from "../apis/cars/router/car.router.js";
import { invalidRouter } from "../apis/invalid/router/invalid.router.js";
import { startRouter } from "../apis/start/router/start.router.js";
import { travelRouters } from "../apis/travels/router/travel-router.js";
import { uploader } from "../shared/multer/multer.js";
import { userRoutes } from "../apis/users/router/user.router.js";
import { ratingRouters } from "../apis/ratings/router/ratings.router.js";
import swStats from "swagger-stats";
import { apiLimiter } from "../shared/rateLimit/rateLimit.js";
import { apiResponse } from "../shared/apiRespond/apiResponse.js";

export const serverRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

serverRouter.use(apiLimiter);

serverRouter.use("/assets", express.static(join(root, "assets")));

serverRouter.post("/api/file", uploader.single("myFile"), (req, res) => {
  if (!req.file) {
    apiResponse(res, 400, { 'error': 'No file uploaded.' });
  }
  apiResponse(res, 200, { 'message': 'File uploaded successfully.' });
});

serverRouter.get("/api/reset", async (req, res) => {
  if (req.ip) {
    console.log('ip reset->', req.ip);
    const key = (req.ip.toString().split(":")[req.ip.length - 1]);
    console.log('Key->', key);
    apiLimiter.resetKey(key);
    apiResponse(res, 200, { 'message':'Rate limit is reset!'});
  } else {
    apiResponse(res, 400, { 'Error':'Wrong answer, try again.'});
  }
});

serverRouter.use(swStats.getMiddleware({ swaggerSpec: controller }));

serverRouter.use(favicon(join(root, "assets/ico/favicon.ico")));

serverRouter.use("/api/auth", authRoutes);
serverRouter.use("/api/cars", carRouter);
serverRouter.use("/api/docs", middleware, controller);
serverRouter.use("/api/ratings", ratingRouters);
serverRouter.use("/api/travels", travelRouters);
serverRouter.use("/api/users", userRoutes);
serverRouter.use("/api", startRouter);
serverRouter.use("*", invalidRouter);
