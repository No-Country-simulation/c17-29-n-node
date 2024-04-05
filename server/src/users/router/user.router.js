import { Router } from "express";
import { deleteUser, editUser, getUserById, getUsers, postUser } from "../controllers/user.controller.js";


export const userRoutes = Router();

userRoutes.post('/create', postUser);
userRoutes.get('/', getUsers);
userRoutes.get('/:id', getUserById);
userRoutes.patch('/edit/:id', editUser);
userRoutes.delete('/delete/:id', deleteUser);