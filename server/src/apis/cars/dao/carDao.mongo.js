import carsModel from "../model/car.model.js"

class CarDaoMongo {
    async addCar(value) {
        return await carsModel.create(value)
    }

    async getCars(value) {
        return await carsModel.find(value).lean()
    }

    async getCarById(cid) {
        return await carsModel.findById(cid)
    }

    async updateCar(cid, value) {
        return await carsModel.findByIdAndUpdate(cid, value)
    }

    async deleteCar(cid) {
        return await carsModel.findByIdAndDelete(cid)
    }
}

export default CarDaoMongo