const express = require('express');
const router = express.Router();
const VentasController = require('../controllers/ventasController');

router.post('/', VentasController.createVenta);
router.get('/', VentasController.getVentas);
router.get('/:id', VentasController.getVentaById);

module.exports = router;
