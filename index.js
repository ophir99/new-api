const express = require('express');

const cors = require('cors');

const app = express();

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/user');
mongoose.connect('mongodb://127.0.0.1:27017');
app.use('/user', userRoutes);



app.listen(9800, ()=>{
    console.log("Running at port 9800")
});