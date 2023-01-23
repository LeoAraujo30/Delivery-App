const { userService } = require('../Services/Index');

const getAll = async (req, res) => {
  const serviceResponse = await userService.getAll();
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const userLogin = async (req, res) => {
  const user = req.body;
  const serviceResponse = await userService.userLogin(user);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const addUser = async (req, res) => {
  const newUser = req.body;
  const serviceResponse = await userService.addUser(newUser);
  return res.status(serviceResponse.status).json({ message: serviceResponse.message });
};

module.exports = {
  userLogin,
  addUser,
  getAll,
};
