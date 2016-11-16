// Require the model/s you're controlling
var City = require("../models/city");

//  GET CITY
var cityShow = function(req, res, next){
  var id = req.params.id;

  City.findById(id, function(err, city){
    if (err) {
      res.send(err);
    }

    // return that city as JSON
    res.json(city);
  });
};

// GET CITIES
var cityIndex = function(req, res) {
  City.find({}, function(err, cities) {
    if (err) {
      res.send(err);
    }

    console.log("show cities")
    // return the cities
    res.json(cities);
  });
}

// CREATE CITY
var cityCreate = function(req, res) {
  var city       = new City();   // create a new instance of the City model

  city.name      = req.body.name;
  city.state  = req.body.state;
  city.population  = req.body.population;
  city.capital  = req.body.capital;

  city.save(function(err, savedCity) {
    if (err) {
      res.send(err)
    }

    // log a message
    console.log("Nice City!")
    // return the city
    res.json(savedCity);
  });
};

// UPDATE CITY
var cityUpdate = function(req, res) {
  var id = req.params.id;

  City.findById(id, function(err, city) {

    if (err) {
      res.send(err);
    }

    // set the new city information if it exists in the request
    if (req.body.name) city.name = req.body.name;
    if (req.body.category) city.category = req.body.category;

    // save the city
    city.save(function(err, updatedCity) {
      if (err) {
        res.send(err);
      }
      // log a message
      console.log("Oh, that's the city!");
      // return the city
      res.json(updatedCity);
    });
  });
}

// DELETE CITY
var cityDelete = function(req, res) {
  var id = req.params.id;

  City.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }
    console.log("How could you leave a city like that?")
    res.json({ message: 'Forget that City!' });
  });
}

// Export the function/s as JSON
module.exports = {
  cityShow:   cityShow,
  cityIndex:  cityIndex,
  cityCreate: cityCreate,
  cityUpdate: cityUpdate,
  cityDelete: cityDelete
}
