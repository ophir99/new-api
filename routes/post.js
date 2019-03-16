const post = require('./../controllers/post');

const Router = require('express').Router();

Router.post("/create", post.create);
Router.get("/all", post.fetchAll);

module.exports = Router;