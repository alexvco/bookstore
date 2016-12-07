var mongoose = require('mongoose');

//Schema for genres
var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
    genre:{
    type: String,
    required: true
  },
    description:{
    type: String,
  },
    author:{
    type: String,
  },
    publisher:{
    type: String,
  },
    number:{
    type: String,
  },
    image_url:{
    type: String,
  },
    buy_url:{
    type: String,
  },
  //create_date is not a field in the db, 
  //therefore it is coming from here(Schema) and hence,
  //everytime you refresh the page this field will show the current date and time
  create_date:{
    type: Date,
    default: Date.now
  }
});

//This is gonna make it so that this genre object is accessible from anywhere else
var Book = module.exports = mongoose.model('Book', bookSchema);

//function to get books (since this needs to be accessible from outside we need to do module.exports to the getBooks function)
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit); //if no args are passed for find or limit, it will return all like db.genres.find().limit();
}

module.exports.getBookById = function(id, callback){
  Book.findById(id, callback); //findById is a mongoose method
}

