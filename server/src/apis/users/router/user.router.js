import { Router } from "express";
import { deleteUser, editUser, getUserById, getUsers, postUser } from "../controller/user.controller.js";
import { validateJWT } from "../../../shared/jwt/jwtExtractor.js";

export const userRoutes = Router();

userRoutes.get("/", validateJWT, getUsers);
userRoutes.get("/:id", validateJWT, getUserById);
userRoutes.post("/", validateJWT, postUser);
userRoutes.put("/:id", validateJWT, editUser);
userRoutes.delete("/:id", validateJWT, deleteUser);
