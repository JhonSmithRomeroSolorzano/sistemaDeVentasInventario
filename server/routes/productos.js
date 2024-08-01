const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productosController');

router.post('/', ProductoController.createProducto);
router.get('/', ProductoController.getProductos);
router.put('/:id', ProductoController.updateProducto);

module.exports = router;
