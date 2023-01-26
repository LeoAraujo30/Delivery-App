const { productsService } = require('../Services/Index');

const allProducts = async (_req, res) => {
  const serviceResponse = await productsService.getAllProducts();
  return res.status(serviceResponse.status).json(serviceResponse.message);
};

module.exports = {
  allProducts,
};
