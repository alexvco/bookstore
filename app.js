var express = require ('express');  
var bodyParser = require('body-parser');
var path = require('path'); //core module hence npm install not needed
var mongoose = require('mongoose');
var app = express();
var port = 3000;

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port);
console.log('Server running on port' + port);