import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { createHash, validatePassword } from "../../../shared/bcrypt/bcrypt.js";
import { createUserService, getUserBy } from "../../users/services/user.services.js";

config();

const secreto = process.env.JWT_SECRET;
const expToken = process.env.JWT_EXPIRATION;

const register = async (req, res) => {
  const { name, email, password, age, phoneNumber } = req.body;

  if (!email || !password) {
    return "Incomplete Values";
  }
  const hashedPassword = await createHash(password);
  const newUser = { name, email, password: hashedPassword, age, phoneNumber };

  const result = await createUserService(newUser);
  // console.log(result)
  return res.send(result);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return "Incomplete Values";
  }

  const user = await getUserBy({ email });

  if (!user) {
    return "User doesn't exist / Incorrect Credentials";
  }
  const isValidPassword = await validatePassword(password, user.password);
  if (!isValidPassword) {
    return res.send("Incorrect Password / Incorrect Credentials");
  }
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    secreto,
    { expiresIn: expToken }
  );

  return res.send({ status: "Success", token });
};

const profile = async (req, res) => {
  console.log("Your profile!");
  res.send(req.user);
};

export { register, login, profile };
