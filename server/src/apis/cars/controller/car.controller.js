import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";
import CarDaoMongo from "../dao/carDao.mongo.js";

export class CarController {
  constructor() {
    this.carService = new CarDaoMongo();
  }
  getCars = async (req, res) => {
    try {
      const cars = await this.carService.getCars({ isActive: true });
      if (!cars) throw new Error("There are no active cars");
      apiResponse(res, 200, "", "", { cars: cars });
    } catch (error) {
      apiResponse(res, 500, "", "", { error: error.message });
    }
  };
  getCarById = async (req, res) => {
    try {
      const { cid } = req.params;
      const car = await this.carService.getCarById({ _id: cid });
      if (!car) throw new Error("Car not found");
      apiResponse(res, 200, "", "", { car: car });
    } catch (error) {
      apiResponse(res, 500, "", "", { error: error.message });
    }
  };
  addCar = async (req, res) => {
    try {
      const { body } = req;
      const car = await this.carService.addCar(body);
      if (!car) throw new Error("Car was not created");
      apiResponse(res, 201, "", "", { car: car });
    } catch (error) {
      apiResponse(res, 500, "", "", { error: error.message });
    }
  };
  updateCar = async (req, res) => {
    try {
      const { cid } = req.params;
      const { body } = req;
      const car = await this.carService.updateCar({ _id: cid }, body);
      if (!car) throw new Error("Car was not updated");
      apiResponse(res, 200, "", "", { car: car });
    } catch (error) {
      apiResponse(res, 500, "", "", { error: error.message });
    }
  };
  deleteCar = async (req, res) => {
    try {
      const { cid } = req.params;
      const result = await this.carService.deleteCar(
        { _id: cid },
        { isActive: false }
      );
      if (!result) throw new Error("Car was not deleted");
      apiResponse(res, 200, "", "", { car: result });
    } catch (error) {
      apiResponse(res, 500, "", "", { error: error.message });
    }
  };
}
