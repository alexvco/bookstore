var express = require ('express');  
var bodyParser = require('body-parser');
var path = require('path'); //core module hence npm install not needed
var mongoose = require('mongoose');
var app = express();
var port = 3000;

//===================================================
// Middleware
//===================================================

  //one line of middleware to initialize the body-parser,
  // that will be used in app.post to get params
  // .json bcuz our responses are in json
  app.use(bodyParser.json()); 

  Genre = require('./models/genre.js');
  Book = require('./models/book.js');

  //Connect to mongoose
  mongoose.connect('mongodb://localhost/bookstore')
  var db = mongoose.connection;

//===================================================
// Routes
//===================================================

  app.get('/', function(req, res){
    res.send('Please use /api/books');
  });


//======================Genres======================//


  //This is index for genres
  app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
      if(err){
        throw err;
      }
      res.json(genres);
    });
  });

  //This is create for genres
  app.post('/api/genres', function(req, res){
    var genre = req.body;

    Genre.addGenre(genre, function(err, genres){
      if(err){
        throw err;
      }
      res.json(genre);
    });
  });

  //This is update for genres
  app.put('/api/genres/:id', function(req, res){
    var id = req.params.id;
    var genre = req.body;

    Genre.updateGenre(id, genre, {}, function(err, genres){
      if(err){
        throw err;
      }
      res.json(genre);
    });
  });

  //This is delete for genres
  app.delete('/api/genres/:id', function(req, res){
    var id = req.params.id;

    Genre.removeGenre(id, function(err, genre){
      if(err){
        throw err;
      }
      res.json(genre);
    });
  });


//======================Books======================//


  //INDEX
  app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
      if(err){
        throw err;
      }
      res.json(books);
    });
  });

  //SHOW
  app.get('/api/books/:id', function(req, res){
    Book.getBookById(req.params.id, function(err, book){
      if(err){
        throw err;
      }
      res.json(book);
    });
  });

  //POST=CREATE
  app.post('/api/books', function(req, res){
    var book = req.body;

    Book.addBook(book, function(err, books){
      if(err){
        throw err;
      }
      res.json(book);
    });
  });

  //PUT=UPDATE
  app.put('/api/books/:id', function(req, res){
    var id = req.params.id;
    var book = req.body;

    Book.updateBook(id, book, {}, function(err, books){
      if(err){
        throw err;
      }
      res.json(book);
    });
  });

  //DELETE=DESTROY
  app.delete('/api/books/:id', function(req, res){
    var id = req.params.id;

    Book.removeBook(id, function(err, book){
      if(err){
        throw err;
      }
      res.json(book);
    });
  });

//===================================================
// Server
//===================================================

  app.listen(port);
  console.log('Server running on port' + port);

