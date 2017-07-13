var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/information', function(req, res, next) {
    res.render('information', { title: 'Express' });
});
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Express' });
});


module.exports = router;
