const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Producto.associate = function(models) {
    Producto.belongsTo(models.Bodega, { foreignKey: 'bodega_id', as: 'bodega' });
    Producto.hasMany(models.VentaProducto, { foreignKey: 'producto_id', as: 'ventaProductos' });
  };
  return Producto;
};
