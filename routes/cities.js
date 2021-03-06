var express = require('express');
var router = express.Router();

// Require cities controller
var CitiesCtrl = require('../controllers/cities')

// CITIES CRUD SERVICES
router.get('/:id',    CitiesCtrl.cityShow);
router.get('/',       CitiesCtrl.cityIndex);
router.post('/',      CitiesCtrl.cityCreate);
router.put('/:id',    CitiesCtrl.cityUpdate);
router.delete('/:id', CitiesCtrl.cityDelete);

module.exports = router;
