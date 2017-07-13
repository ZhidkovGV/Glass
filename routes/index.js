var express = require('express');
var router = express.Router();
var Product = require('../models/product');

const DEFAULT_LIMIT = 12;
const DEFAULT_OFFSET = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  const limit = req.query.limit || DEFAULT_LIMIT;
  const offset = req.query.offset ? (parseInt(req.query.offset) -1) * limit : DEFAULT_OFFSET;
  Product.find().limit(limit).skip(offset).exec(function (err, products) {
      if(err) {
        console.log(err);
      }
      const pageCount = parseInt(products.length / limit);

      var pages = [];
      for (var i = 1 ; i <= pageCount; i++) {
        pages.push(i);
      }
      Product.count(null,function (err, count) {
          const pageCount = parseInt(count / limit);

          var pages = [];
          for (var i = 1 ; i <= pageCount; i++) {
              pages.push(i);
          }
          res.render('index',
              {
                title: 'Propeller - spinner shop',
                products: products ,
                pageCount: pages ,
                currentPage: offset + 1
              }
          );
      });
  });
});
router.get('/information', function(req, res, next) {
    res.render('information', { title: 'Express' });
});
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Express' });
});


module.exports = router;
