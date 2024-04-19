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
    const user = await createUserService(payload);
    if (!user) throw new Error("User was not created");
    apiResponse(res, 201, { message: "User created"});
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const servResponse = await getAllUsersService();
    if (!servResponse) throw new Error("There are no users");
    apiResponse(res, 200, { users: servResponse });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    //-- get ID from the url params in order to use it as a param in the service function
    const { id } = req.params;
    const servResponse = await getUserByIdService(id);
    if (!servResponse) throw new Error("User not found");
    apiResponse(res, 200, { user: servResponse });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};
export const editUser = async (req, res) => {
  try {
    //-- Get id & payload for the edit service params
    const { id } = req.params;
    const payload = req.body;
    const servResponse = await editUserService(id, payload);
    if (!servResponse) throw new Error("Unedited user");
    apiResponse(res, 200, { message: "User edited" });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    //-- Get id from url params to use it in the delete user service
    const { id } = req.params;
    const servResponse = await deleteUserService(id);
    if (!servResponse) throw new Error("User not deleted");
    apiResponse(res, 200, { message: "User deleted" });
  } catch (error) {
    apiResponse(res, 500, { error: error.message });
  }
};
