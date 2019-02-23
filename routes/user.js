const Router = require('express').Router()
const userController = require('./../controllers/user');

Router.post('/create', userController.createUser);
Router.post('/login', userController.login);

Router.use(userController.checkUser);
Router.get("/checkusers", userController.checkUsers);
module.exports = Router;