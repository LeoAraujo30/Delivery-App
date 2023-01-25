const { Router } = require('express');
const saleController = require('../Controllers/saleController');

const saleRouter = Router();

saleRouter.post('/register', saleController.registerSale);

module.exports = saleRouter;
