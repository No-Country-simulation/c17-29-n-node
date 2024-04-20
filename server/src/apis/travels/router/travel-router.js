import { Router } from 'express'
import { createTravel, deleteTravel, getAllTravels, getTravelById, updateTravel } from '../controller/travel-controller.js';
import { validateJWT } from '../../../shared/jwt/jwtExtractor.js';


export const travelRouters = Router()

travelRouters.get("/", getAllTravels);
travelRouters.get("/:id", getTravelById);
travelRouters.post("/", validateJWT, createTravel);
travelRouters.put("/:id", validateJWT, updateTravel);
travelRouters.delete("/:id", validateJWT, deleteTravel);