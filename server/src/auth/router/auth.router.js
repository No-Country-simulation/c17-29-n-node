import { Router } from "express";
import { validateJWT } from "../../middlewares/jwtExtractor.js";
import { login, profile, register } from "../controller/auth.Controller.js";

export const authRoutes = Router();

authRoutes.get('/profile', validateJWT, profile);
authRoutes.post('/register', register);
authRoutes.post('/login', login);
