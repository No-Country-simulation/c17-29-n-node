export const postUser = async (req, res) => {
  try {
    //-- Get the payload from the body in order to use it as a param in the post user service
    const payload = req.body;
    //-- Waiting for the service to post a new user
    res.status(201).json(payload);
  } catch (error) {
    res.status(500).json(error)
  }
};

export const getUsers = async (req, res) => {
  try {
    //-- Waiting for the service to set servResponse
    const servResponse = 'test user2';
    res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    //-- get ID from the url params in order to use it as a param in the service function
    const { id } = req.params;
    //-- Waiting for the service to set servResponse
    const servResponse = `test(${id})`;
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editUser = (req, res) => {
  try {
    //-- Get id & payload for the edit service params
    const { id } = req.params;
    const payload = req.body;

    //-- Waiting the edit user service
    const servResponse = `user(${id}) edited succes`
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error)
  }
};

export const deleteUser = (req, res) => {
  try {
    //-- Get id from url params to use it in the delete user service
    const { id } = req.params;
    //-- Waiting for the delete user service
    const servResponse = `user(${id}) deleted succesfully`;
    !servResponse ? res.status(404).json('user not found') : res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error)
  }
}