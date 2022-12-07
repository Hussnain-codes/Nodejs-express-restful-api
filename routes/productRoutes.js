const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
 );

 router.get('/:id',
   tokenValidation.validateToken,
   productController.getProductById   
);

router.put('/:id', 
   joiSchemaValidation.validateBody(productSchema.updateProductSchema),
   productController.updateProduct
);

router.delete('/:id',
   productController.deleteProduct
);

 router.get('/',
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts
 );

module.exports = router;