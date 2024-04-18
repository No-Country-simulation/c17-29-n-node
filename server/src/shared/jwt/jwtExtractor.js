import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { apiResponse } from "../apiRespond/apiResponse.js";

config();

const secreto = process.env.JWT_SECRET;

export const validateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return apiResponse(res, 401, "", "", {
        error: "Check authorization headers",
      });
    }
    //Res.status(401)send({ status: "error", error: "Check authorization headers" });
    const token = authHeader.split(" ")[1];
    const userInfo = jwt.verify(token, secreto);
    req.user = userInfo;
    next();
  } catch (error) {
    apiResponse(res, 401, "", "", { error: "auth error" });
    //res.status(401).send({ status: "error", error: "TOKEN error" });
  }
};
