import { Router } from "express";
// import { deleteUser, editUser, getUserById, getUsers, postUser } from "../controllers/user.controller.js";
import { register, login, profile } from "../../controllers/SessionController.js"
import { validateJWT } from "../../middlewares/jwtExtractor.js";

export const userRoutes = Router();

// userRoutes.post('/create', postUser);
// userRoutes.get('/', getUsers);
// userRoutes.get('/:id', getUserById);
// userRoutes.patch('/edit/:id', editUser);
// userRoutes.delete('/delete/:id', deleteUser);

userRoutes.get('/profile', validateJWT, profile)
userRoutes.post('/register', register)
userRoutes.post('/login', login)
