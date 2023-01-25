const { Router } = require('express');
const userRouter = require('./userRoutes');
const saleRouter = require('./saleRoutes');

const routes = Router();

routes.use('/user', userRouter);
routes.use('/sale', saleRouter);

module.exports = routes;
