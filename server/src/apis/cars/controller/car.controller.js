import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";
import CarDaoMongo from "../dao/carDao.mongo.js";

export class CarController {
    constructor () {
        this.carService = new CarDaoMongo()
    }
    getCars = async (req, res) => {
        try {
            const cars = await this.carService.getCars({ isActive: true })
            apiResponse(res, 200, "", "", { cars: cars })
        } catch (error) {
            apiResponse(res, 500, "", "", { error: error.message })
        }
    }
    getCarById = async (req, res) => {
        try {
            const { cid } = req.params
            const car = await this.carService.getCarById({ _id: cid })
            apiResponse(res, 200, "", "", { car: car });
        } catch (error) {
            apiResponse(res, 500, "", "", { error: error.message })
        }
    }
    addCar = async (req, res) => {
        try {
            const { body } = req
            const car = await this.carService.addCar(body)
        } catch (error) {
            apiResponse(res, 500, "", "", { error: error.message })
        }
    }
    updateCar = async (req, res) => {
        try {
            const { cid } = req.params
            const { body } = req
            const car = await this.carService.updateCar({ _id: cid }, body)
            apiResponse(res, 200, "", "", { car: car })
        } catch (error) {
            apiResponse(res, 500, "", "", { error: error.message })
        }
    }
    deleteCar = async (req, res) => {
        try {
            const { cid } = req.params
            const result = await this.carService.deleteCar({ _id: cid }, { isActive: false })
            apiResponse(res, 200, "", "", { car:result })
        } catch (error) {
            apiResponse(res, 500, "", "", { error: error.message })
        }
    }
}