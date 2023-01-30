const { Router } = require('express');
const saleController = require('../Controllers/saleController');

const saleRouter = Router();

saleRouter.post('/register', saleController.registerSale);

saleRouter.get('/:saleId', saleController.saleDetails);

module.exports = saleRouter;
