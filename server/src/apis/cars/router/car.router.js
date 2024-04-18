import { Router } from "express";
import { CarController } from "../controller/car.controller.js";
import { validateJWT } from "../../../shared/jwt/jwtExtractor.js";

export const carRouter = Router();
const { getCars, getCarById, addCar, updateCar, deleteCar } =
  new CarController();

carRouter
  .get("/", validateJWT, getCars)
  .get("/:cid", validateJWT, getCarById)
  .post("/", validateJWT, addCar)
  .put("/:cid", validateJWT, updateCar)
  .delete("/:cid", validateJWT, deleteCar);
