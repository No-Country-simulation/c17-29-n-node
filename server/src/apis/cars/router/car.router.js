import { Router } from "express";
import { CarController } from "../controller/car.controller.js";
import { validateJWT } from "../../../shared/jwt/jwtExtractor.js";
import { isApiKey } from "../../../shared/apiKey/apiKey.js";

export const carRouter = Router();
const { getCars, getCarById, addCar, updateCar, deleteCar } =
  new CarController();

carRouter
  .get("/", isApiKey, validateJWT, getCars)
  .get("/:cid", isApiKey, validateJWT, getCarById)
  .post("/", isApiKey, validateJWT, addCar)
  .put("/:cid", isApiKey, validateJWT, updateCar)
  .delete("/:cid", isApiKey, validateJWT, deleteCar);
