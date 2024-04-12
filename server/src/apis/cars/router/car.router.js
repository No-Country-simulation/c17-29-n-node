import { Router } from 'express';
import CarController from '../controller/car.controller.js';

export const carRouter = Router();
const { 
    getCars, 
    getCarById, 
    addCar, 
    updateCar, 
    deleteCar 
} = new CarController();

carRouter
    .get('/', getCars)
    .get('/:cid', getCarById)
    .post('/', addCar)
    .put('/:cid', updateCar)
    .delete('/:cid', deleteCar);