import { Router } from "express";
import { deleteUser, editUser, getUserById, getUsers, postUser } from "../controller/user.controller.js";
import { validateJWT } from "../../../shared/jwt/jwtExtractor.js";
import { isApiKey } from "../../../shared/apiKey/apiKey.js";

export const userRoutes = Router();

userRoutes.get("/", isApiKey, getUsers);
userRoutes.get("/:id", isApiKey, getUserById);
userRoutes.post("/", isApiKey, validateJWT, postUser);
userRoutes.put("/:id", isApiKey, validateJWT, editUser);
userRoutes.delete("/:id", isApiKey, validateJWT, deleteUser);
