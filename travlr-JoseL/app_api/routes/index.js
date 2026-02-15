const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.route('/trips').get(tripsController.tripsList)// GET method gets all trips
    .post(tripsController.tripsAddTrip) // POST method adds a trip

router.route('/trips/:tripCode').get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);// PUT method updates trip;

module.exports = router;

