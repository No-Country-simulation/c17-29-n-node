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
  .get("/", validateJWT, getRatings)
  .get("/:id", validateJWT, getRatingById)
  .get("/ratee/:id", validateJWT, getRatingByRateeId)
  .get("/rater/:id", validateJWT, getRatingByRaterId)
  .post("/", validateJWT, createRating)
  .put("/:id", validateJWT, updateRating)
  .delete("/:id", validateJWT, deleteRating);