const { Router } = require('express');
const { productsController } = require('../Controllers/Index');

const productsRouter = Router();

productsRouter.get('/', productsController.allProducts);

module.exports = productsRouter;
