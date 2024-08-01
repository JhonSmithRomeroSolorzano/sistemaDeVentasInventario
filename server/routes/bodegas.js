const express = require('express');
const router = express.Router();
const BodegasController = require('../controllers/bodegasController');

router.post('/', BodegasController.createBodega);
router.get('/', BodegasController.getBodegas);

module.exports = router;
