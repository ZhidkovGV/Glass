var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Product = new Schema({
    name          : String,
    description            : String,
    price : Number,
    imgLink : String
});

module.exports = mongoose.model('Product', Product );