import { Router } from 'express'
import ratingsController from '../controller/ratings.controller.js'

export const ratingsRouter = Router()
const { getRatings, getRatingById, getRatingByRaterId, getRatingByRateeId, createRating } = new ratingsController

ratingsRouter
    .get('/', getRatings)
    .get('/raterId', getRatingByRaterId)
    .get('/rateeId', getRatingByRateeId)
    .get('/:id', getRatingById)
    .post('/createrating', createRating)