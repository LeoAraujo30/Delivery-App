const { Router } = require('express');
const userController = require('../Controllers/UserController');

const userRouter = Router();

userRouter.post('/login', userController.userLogin);
userRouter.post('/register', userController.register);

module.exports = userRouter;
