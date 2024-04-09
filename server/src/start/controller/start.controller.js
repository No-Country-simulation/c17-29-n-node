import { getStart } from "../services/start.services.js";


export const start = async (req, res) => {
  try {
    const startResponse =await getStart();
    res.status(200).json(startResponse);
  } catch (error) {
    res.status(500).json(error)
  }
};