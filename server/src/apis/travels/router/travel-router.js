import { Router } from 'express'
import { createTravel, deleteTravel, getAllTravels, getTravelById, updateTravel } from '../controller/travel-controller.js';
import { validateJWT } from '../../../shared/jwt/jwtExtractor.js';


export const travelRouters = Router()

travelRouters.get("/", validateJWT, getAllTravels);
travelRouters.get("/:id", validateJWT, getTravelById);
travelRouters.post("/", validateJWT, createTravel);
travelRouters.put("/:id", validateJWT, updateTravel);
travelRouters.delete("/:id", validateJWT, deleteTravel);