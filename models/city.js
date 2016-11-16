var mongoose = require('mongoose');

// Create a schema of your model
var citySchema = new mongoose.Schema({
  name: String,
  state: String,
  population: Number,
  captial: Boolean
});

// Create the model using your schema.
var City = mongoose.model('City', citySchema);

// Export the model of the Fish.
module.exports = City;
