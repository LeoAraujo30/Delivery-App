const { Op } = require('sequelize');
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
    const { dataValues: { id, name, email, role } } = await User.create({
      name: newUser.name,
      email: newUser.email,
      password: crypto.createHash('md5').update(newUser.password).digest('hex'),
      role: 'customer',
    });
    return { status: 201, message: { id, name, email, role, token } };
  }
};

const registerByAdm = async (newUserByAdm, token) => {
  const check1 = await User.findOne({ where: { email: newUserByAdm.email } });
  const check2 = await User.findOne({ where: { name: newUserByAdm.name } });
  if (check1 || check2) return { status: 409, message: 'Conflict' };
  const admTokenValidate = tokenServices.validateToken(token);
  const { password: _, ...userWithoutPassToken } = newUserByAdm;
  if (!admTokenValidate.data) return { status: 409, message: 'The token is not from an admin' };
  if (admTokenValidate.data.role === 'administrator') {
    await User.create({
      name: newUserByAdm.name,
      email: newUserByAdm.email,
      password: crypto.createHash('md5').update(newUserByAdm.password).digest('hex'),
      role: newUserByAdm.role,
    });
    return { status: 201, message: userWithoutPassToken };
  }
};

const getAllSeller = async () => {
  const users = await User.findAll({ where: { role: 'seller' } });
  return { status: 200, message: users };
};

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({ 
      attributes: { exclude: 'password' }, 
      where: { role: { [Op.not]: 'administrator' } },
    });
    return { status: 200, message: allUsers };
  } catch (err) {
    return { status: 409, message: err };
  }
};

const deleteUser = async (email, token) => {
  try {
    const admTokenValidate = tokenServices.validateToken(token);
    if (!admTokenValidate.data) return { status: 401, message: 'The token is not from an admin' };
    if (admTokenValidate.data.role === 'administrator') {
      const deleted = await User.destroy({
        where: { email },
      });
      if (deleted === 1) {
        return { status: 200, message: 'Sucess' };
      }
      return { status: 404, message: 'User not found!' };
    }
  } catch (err) {
    return { status: 409, message: err };
  }
};

module.exports = {
  userLogin,
  register,
  registerByAdm,
  getAllSeller,
  getAllUsers,
  deleteUser,
};
