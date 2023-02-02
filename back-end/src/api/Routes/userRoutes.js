const { Router } = require('express');
const userController = require('../Controllers/UserController');
const saleController = require('../Controllers/saleController');

const userRouter = Router();

userRouter.post('/login', userController.userLogin);
userRouter.post('/register', userController.register);
userRouter.get('/:userId/order', saleController.userOrder);
userRouter.get('/seller/:sellerId/sales', saleController.sellerSales);
userRouter.post('/registerByAdm', userController.registerByAdm);
userRouter.get('/seller', userController.getAllSeller);
userRouter.get('/getAllUsers', userController.getAllUsers);
userRouter.delete('/delete', userController.deleteUser);

module.exports = userRouter;
