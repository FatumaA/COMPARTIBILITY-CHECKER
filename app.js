const express = require('express');

const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to MongoDb');
});

app.get('/', (req, res) => {
    res.send({mssg: "Welcome to Compartibility Checker"})
});

app.listen(3030, () => {
    console.log(`server has started 'http://localhost:3030'`);
})