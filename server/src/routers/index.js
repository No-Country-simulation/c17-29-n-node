import { Router } from "express";
import { start } from "../start/router/start.router.js";

const router = Router();

//use /api/nameOfFeature as standard for the endpoints

router.use("/", start);

export default router;