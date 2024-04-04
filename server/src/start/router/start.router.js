import { Router } from "express";
import { getStart } from "../controller/start.controller.js";

export const start = Router();

//use /api/nameOfFeature as standard for the endpoints

start.use("/",getStart);
