var mongoose = require('mongoose');

//Schema for genres
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

//This is gonna make it so that this genre object is accessible from anywhere else
var Genre = module.exports = mongoose.model('Genre', genreSchema);

//function to get genres (since this needs to be accessible from outside we need to do module.exports to the getGenres function)
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}