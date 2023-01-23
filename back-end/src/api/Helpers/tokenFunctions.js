require('dotenv/config');
const jwt = require('jsonwebtoken');
// const fs = require('fs');

const createToken = (data) => {
  // const key = fs.readFileSync('back-end/jwt.evaluation.key', 'utf8');
  // console.log(key);

  // não consegui pegar o secret do arquivo jwt.evaluation.key que está no diretório back-end
  const token = jwt.sign({ data }, 'secret_key', {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, 'secret_key');
    return data; // retorna { iat: data de emissao, exp: data de expiração } em caso de sucesso
  } catch (_e) {
    return { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = {
  createToken,
  validateToken,
};
