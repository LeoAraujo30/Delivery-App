const { saleService } = require('../Services/Index');

const registerSale = async (req, res) => {
  const newSale = req.body;
  const token = req.header('Authorization');
  const serviceResponse = await saleService.register(newSale, token);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

module.exports = {
  registerSale,
};
