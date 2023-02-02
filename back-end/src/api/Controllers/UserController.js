const { userService } = require('../Services/Index');

const userLogin = async (req, res) => {
  const user = req.body;
  const serviceResponse = await userService.userLogin(user);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const register = async (req, res) => {
  const newUser = req.body;
  const serviceResponse = await userService.register(newUser);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const registerByAdm = async (req, res) => {
  const newUserByAdm = req.body;
  const token = req.header('Authorization');
  const serviceResponse = await userService.registerByAdm(newUserByAdm, token);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const getAllSeller = async (_req, res) => {
  const serviceResponse = await userService.getAllSeller();
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const getAllUsers = async (_req, res) => {
  const serviceResponse = await userService.getAllUsers();
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const deleteUser = async (req, res) => {
  const { email } = req.body;
  const token = req.header('Authorization');
  const serviceResponse = await userService.deleteUser(email, token);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

module.exports = {
  userLogin,
  register,
  registerByAdm,
  getAllSeller,
  getAllUsers,
  deleteUser,
};
