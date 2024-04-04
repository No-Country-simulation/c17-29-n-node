import { userModel } from "../model/user.model.js";

export const getAllUsersService = async () => {
  return await userModel.find({});
};

export const createUserService = async (payload) => {
  const newUser = new userModel(payload);
  return await newUser.save();
};

export const getUserByIdService = async (id) => {
  return await userModel.findById(id);
}