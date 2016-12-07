var express = require ('express');  
var bodyParser = require('body-parser');
var path = require('path'); //core module hence npm install not needed
var mongoose = require('mongoose');
var app = express();
var port = 3000;

Genre = require('./models/genre.js');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection;

//Routes
app.get('/', function(req, res){
  res.send('Please use /api/books');
});

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

app.listen(port);
console.log('Server running on port' + port);