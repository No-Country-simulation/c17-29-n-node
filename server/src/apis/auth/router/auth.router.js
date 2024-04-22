import { Router } from "express";
import { login, profile, register } from "../controller/auth.Controller.js";
import { validateJWT } from "../../../shared/jwt/jwtExtractor.js";
import { isApiKey } from "../../../shared/apiKey/apiKey.js";

export const authRoutes = Router();

authRoutes.get("/profile", isApiKey, validateJWT, profile);
authRoutes.post("/register", isApiKey, register);
authRoutes.post("/login", isApiKey, login);
