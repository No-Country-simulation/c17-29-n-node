import { Router } from "express";
import { getStart } from "../controller/start.controller.js";

export const start = Router();

start.use("/start",getStart);
