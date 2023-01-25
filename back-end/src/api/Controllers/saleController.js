const { saleService } = require('../Services/Index');

const registerSale = async (req, res) => {
  const newSale = req.body;
  const serviceResponse = await saleService.register(newSale);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

module.exports = {
  registerSale,
};
