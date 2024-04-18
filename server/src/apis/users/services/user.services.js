import { userModel } from "../model/user.model.js";

export const getAllUsersService = async () => {
  return await userModel.find({ disabled: false }).lean();
};

export const createUserService = async (payload) => {
  const newUser = new userModel(payload);
  return await newUser.save();
};

export const getUserByIdService = async (id) => {
  return await userModel.findById(id);
};

export const getUserBy = (param) => {
  return userModel.findOne(param)
}; //agregado por agustin para el login

export const editUserService = async (id, payload) => {
  const options = {
    new: true
  };//lo quite porque no cambiaba los datos
  return await userModel.findByIdAndUpdate(id, payload);
};

export const deleteUserService = async (id) => {
  return await userModel.findByIdAndDelete(id);
}