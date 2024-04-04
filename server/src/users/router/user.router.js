import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";


export const userRoutes = Router();

userRoutes.post('/create', getUsers)
userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUsers)
userRoutes.patch('/edit/:id', getUsers)
userRoutes.delete('/delete/:id', getUsers)