var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/meals');

/* GET home page. */
router.get('/', ctrlMain.meals);

module.exports = router;
