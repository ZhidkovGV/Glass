var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/:cuid', function (req, res) {
    Product.findOne({_id : req.params.cuid},function (err, product) {
        res.render('product', { product: product} );
    })
});

module.exports = router;