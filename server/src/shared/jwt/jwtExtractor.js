import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secreto = process.env.JWT_SECRET;

export const validateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res
      .status(401)
      .send({ status: "error", error: "Check authorization headers" });
  const token = authHeader.split(" ")[1];

  try {
    const userInfo = jwt.verify(token, secreto);
    req.user = userInfo;
    console.log(userInfo);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: "error", error: "TOKEN error" });
  }
};
