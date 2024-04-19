import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";
import travelModel from "../model/travel-model.js";

export async function createTravel(req, res) {
  try {
    const payload = req.body;
    const newTravel = new travelModel(payload);
    const sendTravel = await newTravel.save();
    if (!sendTravel) throw new Error("Trip was not created");
    apiResponse(res, 201, { message: "Travel created"});
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
}

export async function getAllTravels(req, res) {
  try {
    const trips = await travelModel.find({ isActive: true }).lean();
    if (!trips) throw new Error("Trips does not exist");
    apiResponse(res, 201, { travels: trips });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
}

export const getTravelById = async (req, res) => {
  try {
    const { id } = req.params;
    const searchTravel = await travelModel.findById(id);
    if (!searchTravel) throw new Error("Trip does not exist");
    apiResponse(res, 201, { travel: searchTravel });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export async function updateTravel(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updateTravel = await travelModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateTravel) throw new Error("Trip not updated");
    apiResponse(res, 201, { message: "Travel updated"});
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
}

export async function deleteTravel(req, res) {
  try {
    const { id } = req.params;
    const deleteTravel = await travelModel.findByIdAndDelete(id);
    if (!deleteTravel) throw new Error("Trip was not deleted");
    apiResponse(res, 201, { message: "Travel deleted"});
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
}
