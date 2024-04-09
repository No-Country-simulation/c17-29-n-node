import { Router } from "express";

import { controller, middleware } from "../config/sawgger/swagger.config.js";
import { invalidRouter } from "../Invalid/router/invalid.router.js";
import { startRouter } from "../start/router/start.router.js";

const router = Router();

//use /api/nameOfFeature as standard for the endpoints

router.use("/api/docs", middleware, controller);
router.use("/api/start", startRouter);
router.use("*", invalidRouter);

export default router;