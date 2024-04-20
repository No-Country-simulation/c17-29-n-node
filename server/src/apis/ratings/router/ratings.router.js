import { Router } from 'express'
import ratingsController from '../controller/ratings.controller.js'
import { validateJWT } from '../../../shared/jwt/jwtExtractor.js';

export const ratingRouters = Router()
const {
  getRatings,
  getRatingById,
  getRatingByRaterId,
  getRatingByRateeId,
  createRating,
  updateRating,
  deleteRating,
} = new ratingsController();

ratingRouters
  .get("/", getRatings)
  .get("/:id", getRatingById)
  .get("/ratee/:id", getRatingByRateeId)
  .get("/rater/:id", getRatingByRaterId)
  .post("/", validateJWT, createRating)
  .put("/:id", validateJWT, updateRating)
  .delete("/:id", validateJWT, deleteRating);