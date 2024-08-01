const { Producto } = require('../../models');

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, bodega_id } = req.body;
    const newProducto = await Producto.create({ nombre, descripcion, precio, stock, bodega_id });
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock, bodega_id } = req.body;

  try {
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.precio = precio;
    producto.stock = stock;
    producto.bodega_id = bodega_id;

    await producto.save();

    res.json(producto);
  } catch (error) {
    console.error('Error updating producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};
