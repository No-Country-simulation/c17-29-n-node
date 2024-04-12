import CarDaoMongo from "../dao/carDao.mongo.js";

class CarController {
    constructor () {
        this.carService = new CarDaoMongo()
    }
    getCars = async (req, res) => {
        try {
            const cars = await this.carService.getCars({ isActive: true })
            res.send({
                status: 'success',
                cars
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
    getCarById = async (req, res) => {
        try {
            const { cid } = req.params
            const car = await this.carService.getCarById({ _id: cid })
            res.send({
                status: 'success',
                car
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
    addCar = async (req, res) => {
        try {
            const { body } = req
            const car = await this.carService.addCar(body)
            res.send({
                status: 'success',
                car
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
    updateCar = async (req, res) => {
        try {
            const { cid } = req.params
            const { body } = req
            const car = await this.carService.updateCar({ _id: cid }, body)
            res.send({
                status: 'success',
                car
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
    deleteCar = async (req, res) => {
        try {
            const { cid } = req.params
            const result = await this.carService.deleteCar({ _id: cid }, { isActive: false })

            res.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
}

export default CarController