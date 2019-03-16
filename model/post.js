const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    text: "string",
    date: "string"
});

const model = mongoose.model("Post", Schema);

module.exports = model;