var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlMain.about);

module.exports = router;
