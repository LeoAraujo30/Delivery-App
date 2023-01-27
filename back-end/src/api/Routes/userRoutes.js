const { Router } = require('express');
const userController = require('../Controllers/UserController');

const userRouter = Router();

userRouter.post('/login', userController.userLogin);
userRouter.post('/register', userController.register);
userRouter.post('/registerByAdm', userController.registerByAdm);
userRouter.get('/seller', userController.getAllSeller);

module.exports = userRouter;
