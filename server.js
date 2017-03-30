//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const react = require('react');
const reactDom = require('react-dom');
const reactRouter = require('react-router');

//schemas
const nyt = require('./models/nytreact.js');

//express
const app = express();
const PORT = process.env.PORT || 3000; //set port, used for listener
app.use(express.static('./public')); //serve public folder

//Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

//mongoDB config
mongoose.connect('mongodb://localhost/3000/nytreact');
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//routes
//-- main
app.get('/', function (req, res) {
     res.sendFile('./public/index.html'); //transfer to index on root
});

//-- api
app.get('/api/', function(req, res) {
    //nyt
});

app.post('/api/', function(req, res){
    //nyt
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});