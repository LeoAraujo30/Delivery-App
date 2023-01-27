const { Router } = require('express');
const userController = require('../Controllers/UserController');
const saleController = require('../Controllers/saleController');

const userRouter = Router();

userRouter.post('/login', userController.userLogin);
userRouter.post('/register', userController.register);
userRouter.get('/:userId/order', saleController.userOrder);
userRouter.post('/registerByAdm', userController.registerByAdm);

module.exports = userRouter;
