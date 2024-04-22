import { Router } from 'express'
import { createTravel, deleteTravel, getAllTravels, getTravelById, updateTravel } from '../controller/travel-controller.js';
import { validateJWT } from '../../../shared/jwt/jwtExtractor.js';
import { isApiKey } from '../../../shared/apiKey/apiKey.js';


export const travelRouters = Router()

travelRouters.get("/", isApiKey, getAllTravels);
travelRouters.get("/:id", isApiKey, getTravelById);
travelRouters.post("/", isApiKey, validateJWT, createTravel);
travelRouters.put("/:id", isApiKey, validateJWT, updateTravel);
travelRouters.delete("/:id", isApiKey, validateJWT, deleteTravel);