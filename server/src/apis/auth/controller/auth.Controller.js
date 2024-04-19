import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { createHash, validatePassword } from "../../../shared/bcrypt/bcrypt.js";
import {
  createUserService,
  getUserBy,
} from "../../users/services/user.services.js";
import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";

config();

const secreto = process.env.JWT_SECRET;
const expToken = process.env.JWT_EXPIRATION;

export const register = async (req, res) => {
  try {
    const { name, email, password, age, phoneNumber } = req.body;
    if (!email || !password) throw new Error("💀 Credentials not found");
    const hashedPassword = await createHash(password);
    const user = { name, email, password: hashedPassword, age, phoneNumber };
    const result = await createUserService(user);
    if (!result) throw new Error("registration was made");
    apiResponse(res, 201,{ message: "User resgistered"});
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("🩻 Credentials not found");
    const user = await getUserBy({ email });
    if (!user) throw new Error("👻 Credentials not found");
    const isValidPassword = await validatePassword(password, user.password);
    if (!isValidPassword) throw new Error("☠️ Credentials not found");
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      secreto,
      { expiresIn: expToken }
    );
    apiResponse(res, 200, { message: "user logged in", token: token });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export const profile = async (req, res) => {
  try {
    apiResponse(res, 200, { profile: req.user });
  } catch (error) {
    apiResponse(res, 404, { error: error.message });
  }
};
