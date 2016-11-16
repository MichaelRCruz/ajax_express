var mongoose = require('./database');

var City = require('../models/city');

var cities = [
  { // 0
    name: "Los Angeles",
    state:  "CA",
    population: 39,
    capital: false
  },
  { // 1
    name: "San Francisco",
    state:  "CA",
    population: 24,
    capital: false
  },
  { // 2
    name: "Milwaukee",
    state:  "WI",
    population: 10,
    capital: false
  },
  { // 3
    name: "Madison",
    state:  "WI",
    population: 5,
    capital: true
  },
  { // 4
    name: "Montgomery",
    state:  "AL",
    population: 10,
    capital: true
  }
];

City.remove({}, function(err) {
  if (err) console.log(err);
  City.create(cities, function(err, cities) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + cities.length  + " cities.");
      mongoose.disconnect();
    }
  });
});
