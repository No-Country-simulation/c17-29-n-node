import { getInvalid } from "../services/invalid.services.js";
export const invalid = async (req, res) => {
  try {
    const startResponse = await getInvalid();
    res.status(200).json(startResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};
