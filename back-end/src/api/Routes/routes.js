const { Router } = require('express');
const userRouter = require('./userRoutes');
const saleRouter = require('./saleRoutes');
const productsRouter = require('./productsRoutes');

const routes = Router();

routes.use('/user', userRouter);
routes.use('/sale', saleRouter);
routes.use('/customer/products', productsRouter);

module.exports = routes;
