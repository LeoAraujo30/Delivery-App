// const userLogin = async ({ email, password }) => {
//   const user = await User.findOne({ where: { email } });
//   if (!user || user.dataValues.password !== password) {
//     return { status: 404, message: 'Not found', status: 400 };
//   }
//   const { password: _, ...userWithoutPassword } = user.dataValues; // o "password: _" tá removendo o atributo do obj
//   const token = tokenFuncs.createToken(userWithoutPassword); // userWithoutPassword é user.dataValues sem a chave password
//   return { status: 200, message: token };
// };

// const addUser = async (newUser) => {
//   const check = await User.findOne({ where: { email: newUser.email } });
//   if (check) return { status: 409, message: 'User already registered' };
//   const { password: _, ...userWithoutPassword } = newUser;
//   const token = tokenFuncs.createToken(userWithoutPassword);
//   await User.create({
//     name: newUser.name,
//     email: newUser.email,
//     password: newUser.password,
//   });
//   return { status: 201, message: token };
// };

// module.exports = {
//   userLogin,
//   addUser,
// };
