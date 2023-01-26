const crypto = require('crypto');
const { User } = require('../../database/models');
const tokenServices = require('../Helpers/tokenFunctions');

const userLogin = async ({ email, password }) => {
  const passwordMd5 = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({ where: { email } });
  if (!user || user.dataValues.password !== passwordMd5) {
    return { status: 404, message: 'Not found' };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues; // o "password: _" tá removendo o atributo do obj
  const token = tokenServices.createToken(userWithoutPassword);
  return { status: 200, message: { ...userWithoutPassword, token } };
};

const register = async (newUser) => {
  const check1 = await User.findOne({ where: { email: newUser.email } });
  const check2 = await User.findOne({ where: { name: newUser.name } });
  if (check1 || check2) return { status: 409, message: 'Conflict' };
  const { password: _, ...userWithoutPassword } = newUser;
  if (!newUser.role) {
    const token = tokenServices.createToken(userWithoutPassword);
    await User.create({
      name: newUser.name,
      email: newUser.email,
      password: crypto.createHash('md5').update(newUser.password).digest('hex'),
      role: 'customer',
    });
    return { status: 201, message: token };
  }
  const admTokenValidate = tokenServices.validateToken(newUser.token);
  if (admTokenValidate.data.role === 'administrator') {
    await User.create({
      name: newUser.name,
      email: newUser.email,
      password: crypto.createHash('md5').update(newUser.password).digest('hex'),
      role: newUser.role,
    });
    const { token: _, ...userWithoutPassToken } = userWithoutPassword;
    return { status: 201, message: userWithoutPassToken };
  }
  return { status: 409, message: 'The token is not from an admin' };
};

module.exports = {
  userLogin,
  register,
};
