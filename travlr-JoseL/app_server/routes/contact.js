var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/contact');

/* GET home page. */
router.get('/', ctrlMain.contact);

module.exports = router;
