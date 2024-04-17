import { Router } from 'express'
import { deleteTravelModel, getAllTravel, startCreateTravel, updateTravelModel } from '../controller/travel-controller.js';
export const travelRouter = Router()
travelRouter.post("/createCar", startCreateTravel)
travelRouter.get("/getAllCar", getAllTravel)
travelRouter.put("/upadteCar/:id", updateTravelModel)
travelRouter.delete("/deleteCar/:id", deleteTravelModel)