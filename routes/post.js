const post = require('./../controllers/post');

const Router = require('express').Router();

Router.post("/create", post.create);
Router.get("/all", post.fetchAll);
Router.put("/:id", post.update);
Router.delete("/:id", post.delete);

module.exports = Router;