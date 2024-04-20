import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { apiResponse } from "../apiRespond/apiResponse.js";

config();

const secreto = process.env.JWT_SECRET;

export const validateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)  throw new Error("Check authorization");
    const token = authHeader.split(" ")[1];
    const userInfo = jwt.verify(token, secreto);
    req.user = userInfo;
    next();
  } catch (error) {
    apiResponse(res, 401, { error: error.message });
  }
};
