import { Router } from "express";
import { login, profile, register } from "../controller/auth.Controller.js";
import { validateJWT } from "../../../shared/middlewares/jwtExtractor.js";

export const authRoutes = Router();

authRoutes.get("/profile", validateJWT, profile);
authRoutes.post("/register", register);
authRoutes.post("/login", login);
