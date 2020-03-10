const express = require('express');
const router = express.Router();
const products = require('./products/products.controller');

router.use('/products', products);

router.use('/', async(req, res, next) => {

    res.send('API AZURE');

});

module.exports = router;