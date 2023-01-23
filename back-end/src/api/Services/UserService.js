const { User } = require('../../database/models');
const crypto = require('crypto');

const getAll = async () => {
  const response = await User.findAll();
  return { status: 200, message: response };
}

const userLogin = async ({ email, password }) => {
  const passwordMd5 = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({ where: { email } });
  if (!user || user.dataValues.password !== passwordMd5) {
    return { status: 404, message: 'Not found' };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues; // o "password: _" tá removendo o atributo do obj
  return { status: 200, message: userWithoutPassword };
};

const addUser = async (newUser) => {
  const check = await User.findOne({ where: { email: newUser.email } });
  if (check) return { status: 409, message: 'User already registered' };
  const { password: _, ...userWithoutPassword } = newUser;
  const token = tokenFuncs.createToken(userWithoutPassword);
  await User.create({
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  });
  return { status: 201, message: token };
};

module.exports = {
  userLogin,
  addUser,
  getAll,
};
