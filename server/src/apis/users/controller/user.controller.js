import { createUserService, deleteUserService, editUserService, getAllUsersService, getUserByIdService } from "../services/user.services.js";

export const postUser = async (req, res) => {
  try {
    //-- Get the payload from the body in order to use it as a param in the post user service
    const payload = req.body;
    await createUserService(payload);
    res.status(201).json(payload);
  } catch (error) {
    res.status(500).json(error)
  }
};

export const getUsers = async (req, res) => {
  try {
    const servResponse = await getAllUsersService();
    res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    //-- get ID from the url params in order to use it as a param in the service function
    const { id } = req.params;
    const servResponse = await getUserByIdService(id);
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editUser = async (req, res) => {
  try {
    //-- Get id & payload for the edit service params
    const { id } = req.params;
    const payload = req.body;
    const servResponse = await editUserService(id, payload)
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error)
  }
};

export const deleteUser = async (req, res) => {
  try {
    //-- Get id from url params to use it in the delete user service
    const { id } = req.params;
    const servResponse = await deleteUserService(id)
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error)
  }
}