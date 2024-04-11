import { Router } from "express";

import { controller, middleware } from "../shared/sawgger/swagger.config.js";
import { invalidRouter } from "../apis/Invalid/router/invalid.router.js";
import { startRouter } from "../apis/start/router/start.router.js";
import { authRoutes } from "../apis/auth/router/auth.router.js";
import { userRoutes } from "../apis/users/router/user.router.js";

const router = Router();

router.use("/api/docs", middleware, controller);
router.use("/api/start", startRouter);
router.use("/api/users", userRoutes);
router.use("/api/auth", authRoutes);
router.use("*", invalidRouter);

export default router;
