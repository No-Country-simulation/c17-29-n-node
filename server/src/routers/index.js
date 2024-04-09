import { Router } from "express";
import { start } from "../start/router/start.router.js";
import { controller, middleware } from "../config/sawgger/swagger.config.js";
import { invalid } from "../Invalid/router/invalid.router.js";

const router = Router();

//use /api/nameOfFeature as standard for the endpoints

router.use("/api", start);
router.use("/docs", middleware, controller);
router.use("*", invalid);

export default router;