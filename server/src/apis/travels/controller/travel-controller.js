import travelModel from "../model/travel-model.js";

export async function createTravel(req, res) {
  try {
    const payload = req.body;
    const newTravel = new travelModel(payload);
    const sendTravel = await newTravel.save();
    !sendTravel
      ? res.status(404).json({ message: "user not found"})
      : res.status(201).json(sendTravel);
  } catch (error) {
    res.status(404).json({ message: "Error en startCreateCar" });
  }
}

export async function getAllTravels(req, res) {
  try {
    const trips = await travelModel.find();
    !trips
      ? res.status(404).json({ message: "user not found" })
      : res.status(200).json(trips);
  } catch (error) {
    res.status(404).json({ message: "Error en getAllTravel" });
  }
}

export const getTravelById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCar = await travelModel.findById(id);
    !updateCar
      ? res.status(404).json({ message: "user not found" })
      : res.status(200).json(updateCar);
  } catch (error) {
    res.status(500).json({ message: "Error en getAllTravel" });
  }
};

export async function updateTravel(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updateTravel = await travelModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    !updateTravel
      ? res.status(404).json({ message: "user not found"})
      : res.status(200).json(updateTravel);
  } catch (error) {
    res.status(404).json({ message: "Error en updateTravel" });
    //console.log("error desde update car model", error);
  }
}

export async function deleteTravel(req, res) {
  try {
    const { id } = req.params;
    const deleteTravel = await travelModel.findByIdAndDelete(id);
    !deleteTravel
      ? res.status(404).json({ message: "user not found" })
      : res.status(200).json(deleteTravel);
  } catch (error) {
    res.status(404).json({ message: "Error en deleteTravel" });
  }
}
