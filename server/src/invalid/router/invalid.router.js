import { Router } from "express";
import { getInvalid } from "../controller/Invalid.controller.js";

export const invalid = Router();

invalid.use("*", getInvalid);
