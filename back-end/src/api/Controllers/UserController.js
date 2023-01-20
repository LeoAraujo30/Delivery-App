const { userService } = require("../Services/Index");

const userLogin = async (req, res) => {
  const user = req.body;
  const serviceResponse = await userService.userLogin(user);
  return res.status(serviceResponse.status).json(serviceResponse.message);
}

const addUser = async (req, res) => {
  const newUser = req.body;
  const serviceResponse = await userService.addUser(newUser);
  return res.status(serviceResponse.status).json({ message: serviceResponse.message });
};

module.exports = {
  userLogin,
}
