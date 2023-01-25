require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const bla = require('')

const createToken = (data) => {
  const jwtKey = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

  const token = jwt.sign({ data }, jwtKey, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const jwtKey = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
    const data = jwt.verify(token, jwtKey);
    return data; // retorna { iat: data de emissao, exp: data de expiração } em caso de sucesso
  } catch (_e) {
    return { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = {
  createToken,
  validateToken,
};
