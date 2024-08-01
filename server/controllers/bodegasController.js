const { Bodega } = require('../../models');

exports.getBodegas = async (req, res) => {
  try {
    const bodegas = await Bodega.findAll();
    res.json(bodegas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBodega = async (req, res) => {
  try {
    const { nombre, ubicacion } = req.body;
    const newBodega = await Bodega.create({ nombre, ubicacion });
    res.json(newBodega);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
