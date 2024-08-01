const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'postgres', 'nueva_contraseña', {
  host: 'localhost',
  dialect: 'postgres'
});

// Importar los modelos
const Venta = require('./Venta')(sequelize);
const Producto = require('./Producto')(sequelize);
const Bodega = require('./Bodega')(sequelize);
const VentaProducto = require('./VentaProducto')(sequelize);

// Definir asociaciones
Venta.associate({ VentaProducto });
Producto.associate({ VentaProducto, Bodega });
Bodega.associate({ Producto, VentaProducto });
VentaProducto.associate({ Venta, Producto, Bodega });

// Sincronizar modelos con la base de datos
// sequelize.sync({ force: false })  // Elimina y recrea tablas
//   .then(() => {
//     console.log('Modelos sincronizados con la base de datos.');
//   })
//   .catch(error => {
//     console.error('Error al sincronizar modelos:', error);
//   });

module.exports = {
  sequelize,
  Venta,
  VentaProducto,
  Producto,
  Bodega,
};