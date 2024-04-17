import travelModel from "../model/travel-model.js";

async function createTravel(dataCar) {
  try {
    const { origen, destino, capacidad, dia, horario } = dataCar;

    const newCar = new travelModel({  origen, destino, capacidad, dia, horario });

    await newCar.save();

    return newCar;
  } catch (e) {
    console.error("error al crear el auto", e);
  }
}

export async function startCreateTravel(req, res) {
  try {
    const sendCar = await createTravel(req.body);
    res.status(201).json(sendCar);
  } catch (error) {
    console.error("Error en startCreateCar:", error);
  }
}


export async function getAllTravel(req, res) {
  try {
    const trips = await carModel.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error al obtener los viajes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function  updateTravelModel(req, res){
  try {
    const {id} = req.params
    const updateData = req.body
  
    const updateCar = await carModel.findByIdAndUpdate(id, updateData, {new: true})
  
    res.status(200).json(updateCar)
    
  } catch (error) {
    console.log("error desde update car model", error);
  }
}


  export async function  deleteTravelModel(req, res){
  try {
    const {id} = req.params
    const updateData = req.body
  
    const updateCar = await carModel.findByIdAndDelete(id)
  
    res.status(200).json(updateCar)
    
  } catch (error) {
    console.log("error al eliminar car model", error);
  }
}