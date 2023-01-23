const { Router } = require('express');
const userController = require('../Controllers/UserController');

const userRouter = Router();

userRouter.get('/getall', userController.getAll); //para fins de teste
userRouter.post('/login', userController.userLogin);
userRouter.post('/register', userController.register);

module.exports = userRouter;
