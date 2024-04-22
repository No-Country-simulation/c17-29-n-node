import { Router } from 'express'
import ratingsController from '../controller/ratings.controller.js'
import { validateJWT } from '../../../shared/jwt/jwtExtractor.js';
import { isApiKey } from '../../../shared/apiKey/apiKey.js';

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
  .get("/", isApiKey, getRatings)
  .get("/:id", isApiKey, getRatingById)
  .get("/ratee/:id", isApiKey, getRatingByRateeId)
  .get("/rater/:id", isApiKey, getRatingByRaterId)
  .post("/", isApiKey, validateJWT, createRating)
  .put("/:id", isApiKey, validateJWT, updateRating)
  .delete("/:id", isApiKey, validateJWT, deleteRating);