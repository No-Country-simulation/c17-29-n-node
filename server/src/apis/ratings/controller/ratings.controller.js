import RatingsDaoMongo from "../dao/ratingsDao.mongo.js"

class ratingsController {
    constructor() {
        this.ratingsService = new RatingsDaoMongo()
    }

    getRatings = async (req, res) => {
        try {
            const ratings = await this.ratingsService.getRatings()
            res.send({
                status: 'success',
                ratings
            })
        }
        catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

    getRatingById = async (req, res) => {
        try {
            const { id } = req.params //como viene la info desde el front?
            const search = await this.ratingsService.getRatingById(id)
            res.send({
                status: 'success',
                search
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

    getRatingByRaterId = async (req, res) => {
        try {
            const value = req.body.value
            const search = await this.ratingsService.getRatingBy({ raterId: value })
            res.send({
                status: 'success',
                search
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
    getRatingByRateeId = async (req, res) => {
        try {
            const value = req.body.value
            const search = await this.ratingsService.getRatingBy({ rateeId: value })
            res.send({
                status: 'success',
                search
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }

    createRating = async (req, res) => {
        try {
            const raterId = req.body.raterId
            const rateeId = req.body.rateeId
            const rating = req.body.rating
            const result = await this.ratingsService.createRating({ raterId, rateeId, rating })
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

export default ratingsController