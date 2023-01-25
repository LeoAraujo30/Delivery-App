const Sequelize = require('sequelize');
const { Product, Sale, SalesProduct } = require('../../database/models');
const config = require('../../database/config/config');
const { totalPriceCalculator } = require('../utils/saleFuncsAux');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const register = async (bodyObject) => {
  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = bodyObject;

  const products = await Product.findAll({ where: { id: cart.map(({ productId }) => productId) } });

  const t = await sequelize.transaction();
  try {
    const totalPrice = totalPriceCalculator(products, cart);
    const sale = await Sale.create(
      { userId, sellerId, deliveryAddress, deliveryNumber, status: 'Pendente', totalPrice }, 
      { transaction: t },
    );
  
    await SalesProduct
     .bulkCreate(cart.map(({ productId, quantity }) => ({ quantity, productId, saleId: sale.id })), 
     { transaction: t });

    return { status: 201, message: sale };
  } catch (err) {
    return { status: 500, message: 'internal serve error' };
  }
};

module.exports = {
  register,
};
