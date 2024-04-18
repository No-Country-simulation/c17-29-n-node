import { apiResponse } from "../../../shared/apiRespond/apiResponse.js";
import {
  createUserService,
  deleteUserService,
  editUserService,
  getAllUsersService,
  getUserByIdService,
} from "../services/user.services.js";

export const postUser = async (req, res) => {
  try {
    //-- Get the payload from the body in order to use it as a param in the post user service
    const payload = req.body;
    await createUserService(payload);
    apiResponse(res, 201, "", "", { user: payload });
  } catch (error) {
    apiResponse(res, 500, "", "", { error: error.message});
  }
};

export const getUsers = async (req, res) => {
  try {
    const servResponse = await getAllUsersService();
    apiResponse(res, 200, "", "", { users: servResponse });
  } catch (error) {
    apiResponse(res, 500, "", "", { error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    //-- get ID from the url params in order to use it as a param in the service function
    const { id } = req.params;
    const servResponse = await getUserByIdService(id);
    apiResponse(res, 200, "", "", { user: servResponse });
  } catch (error) {
    apiResponse(res, 500, "", "", { error: error.message });
  }
};
export const editUser = async (req, res) => {
  try {
    //-- Get id & payload for the edit service params
    const { id } = req.params;
    const payload = req.body;
    const servResponse = await editUserService(id, payload);
    apiResponse(res, 200, "", "", { user: servResponse });
  } catch (error) {
    apiResponse(res, 500, "", "", { error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    //-- Get id from url params to use it in the delete user service
    const { id } = req.params;
    const servResponse = await deleteUserService(id);
    apiResponse(res, 200, "", "", { user: servResponse });
  } catch (error) {
    apiResponse(res, 500, "", "", { error: error.message });
  }
};
