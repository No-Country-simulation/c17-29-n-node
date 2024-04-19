import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";
import RatingsDaoMongo from "../dao/ratingsDao.mongo.js";

class ratingsController {
  constructor() {
    this.ratingsService = new RatingsDaoMongo();
  }

  getRatings = async (req, res) => {
    try {
      const ratings = await this.ratingsService.getRatings();
      if (!ratings) throw new Error("There are no ratings");
      apiResponse(res, 200, { ratings: ratings });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  getRatingById = async (req, res) => {
    try {
      const { id } = req.params; //como viene la info desde el front?
      const search = await this.ratingsService.getRatingById(id);
      if (!search) throw new Error("Rating not found");
      apiResponse(res, 200, { rating: search });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  getRatingByRaterId = async (req, res) => {
    try {
      console.log("id rater->", req.params.id);
      const { id } = req.params;
      const search = await this.ratingsService.getRatingBy({ raterId: id });
      if (!search) throw new Error("Rater not found");
      apiResponse(res, 200, { rater: search });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  getRatingByRateeId = async (req, res) => {
    try {
      console.log("id ratee->", req.params.id);
      const { id } = req.params;
      const search = await this.ratingsService.getRatingBy({ rateeId: id });
      if (!search) throw new Error("Rater not found");
      apiResponse(res, 200, { ratee: search });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  createRating = async (req, res) => {
    try {
      const raterId = req.body.raterId;
      const rateeId = req.body.rateeId;
      const rating = req.body.rating;
      const result = await this.ratingsService.createRating({
        raterId,
        rateeId,
        rating,
      });
      if (!result) throw new Error("Rating was not created");
      apiResponse(res, 201, { message: "Rating created" });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  updateRating = async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const rating = await this.ratingsService.updateRating({ _id: id }, body);
      if (!rating) throw new Error("Rating was not updated");
      apiResponse(res, 200, { message: "Rating updated" });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };

  deleteRating = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.ratingsService.deleteRating(
        { _id: id },
        { isActive: false }
      );
      if (!result) throw new Error("Rating was not deleted");
      apiResponse(res, 200, { message: "Rating deleted" });
    } catch (error) {
      apiResponse(res, 500, { error: error.message });
    }
  };
}

export default ratingsController;
