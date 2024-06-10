const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const variantController = require('../controllers/variantController');

router.post('/webhook/product', productController.createProduct);
router.post('/webhook/variant', variantController.createVariant);
router.post('/webhook/updateProduct', productController.updateProduct);

module.exports = router;