import { getInvalid } from "../services/invalid.services.js";
import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";

export const invalid = async (req, res) => {
  try {
    const invalidResponse = await getInvalid();
    apiResponse(res, 404, "", "", invalidResponse);
  } catch (error) {
    apiResponse(res, 500, "", "", error);
  }
};
