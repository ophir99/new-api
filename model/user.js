
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : 'string',
    password: 'string'
})

const model = mongoose.model('Users', schema);


module.exports = model;