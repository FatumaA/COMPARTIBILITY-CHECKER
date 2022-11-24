const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

const mongoose = require('mongoose');
var bodyParser = require('body-parser')
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

//connect Database
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to MongoDb');
});

//Base route
app.get('/', (req, res) => {
    res.send({mssg: "Welcome to Compartibility Checker"})
});

app.listen(3030, () => {
    console.log(`server has started 'http://localhost:${PORT}'`);
})