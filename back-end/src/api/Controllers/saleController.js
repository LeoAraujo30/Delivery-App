const { saleService } = require('../Services/Index');
const tokenServices = require('../Helpers/tokenFunctions');

const registerSale = async (req, res) => {
  const newSale = req.body;

  const token = req.header('Authorization');
  const tokenValidate = tokenServices.validateToken(token);
  if (!tokenValidate.data) {
    return res.status(tokenValidate.status).json(tokenValidate.message); 
  }

  const serviceResponse = await saleService.register(newSale, token);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const userOrder = async (req, res) => {
  const { userId } = req.params;
  const serviceResponse = await saleService.getUserOrder(+userId);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

const saleDetails = async (req, res) => {
  const { saleId } = req.params;
  const serviceResponse = await saleService.getSaleDetails(+saleId);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

module.exports = {
  registerSale,
  userOrder,
  saleDetails,
};
