const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();

  return { status: 200, message: products };
};

module.exports = {
  getAllProducts,
};
