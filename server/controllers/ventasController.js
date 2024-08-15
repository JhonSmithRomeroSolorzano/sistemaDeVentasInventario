const { Venta, VentaProducto, Producto, Bodega } = require('../../models');

exports.createVenta = async (req, res) => {
  const { productosVendidos, total_venta } = req.body;

  try {
    // Crear la venta
    const newVenta = await Venta.create({
      total_venta,
      fecha: new Date(), // Use Date object for better precision
      include: [{
        model: VentaProducto,
        as: 'ventaProductos'
      }]
    });

    // Crear las asociaciones de productos en la venta
    const ventaProductos = productosVendidos.map(producto => ({
      venta_id: newVenta.id,
      producto_id: producto.producto_id,
      bodega_id: producto.bodega_id,
      cantidad: producto.cantidad,
    }));

    await VentaProducto.bulkCreate(ventaProductos);

    // Actualizar el stock para cada producto vendido
    for (const producto of ventaProductos) {
      await Producto.decrement('stock', {
        by: producto.cantidad,
        where: { id: producto.producto_id },
      });
    }

    // Fetch the venta with its associated ventaProductos
    const ventaWithProducts = await Venta.findByPk(newVenta.id, {
      include: [{
        model: VentaProducto,
        as: 'ventaProductos',
        include: [ 
          { model: Producto, as: 'producto' },  // Especificar el alias correcto
          { model: Bodega, as: 'bodega' } 
        ] 
      }]
    });

    res.json(ventaWithProducts);
  } catch (error) {
    console.error('Error creating venta:', error);
    res.status(500).json({ error: error.message });
  }
};


exports.getVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [
        {
          model: VentaProducto,
          as: 'ventaProductos',
          include: [
            {
              model: Producto,
              as: 'producto',
            }
          ]
        }
      ]
    });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: [
        {
          model: VentaProducto,
          as: 'ventaProductos',
          include: [
            {
              model: Producto,
              as: 'producto',
            }
          ]
        }
      ]
    });
    if (venta) {
      res.json(venta);
    } else {
      res.status(404).json({ message: 'Venta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
