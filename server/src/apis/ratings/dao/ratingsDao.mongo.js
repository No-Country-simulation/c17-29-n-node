import ratingsModel from "../model/ratings.model.js";

class RatingDaoMongo {
  async getRatings() {
    return await ratingsModel.find({});
  }

  async getRatingById(id) {
    return await ratingsModel.findById(id);
  }

  async getRatingBy(value) {
    return await ratingsModel.findOne(value);
  }

  async updateRating(id, value) {
    return await ratingsModel.findByIdAndUpdate.apply(id, value);
  }

  async createRating(value) {
    return await ratingsModel.create(value);
  }
  async updateRating(id, value) {
    return await ratingsModel.findByIdAndUpdate(id, value);
  }
  async deleteRating(value) {
    return await ratingsModel.findByIdAndDelete(value);
  }
}

export default RatingDaoMongo