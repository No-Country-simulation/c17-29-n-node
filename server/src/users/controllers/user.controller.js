export const postUser = async (req, res) => {
  try {
    //-- Get the payload from the body in order to use it as a param in the post user service
    const payload = req.body;
    //-- Waiting for the service to post a new user
    res.status(201).json(payload);
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUsers = async (req, res) => {
  try {
    //-- Waiting for the service to set servResponse
    const servResponse = 'test user2';
    res.status(200).json(servResponse);
  } catch (error) {
    res.status(500).json(error);
  }
}