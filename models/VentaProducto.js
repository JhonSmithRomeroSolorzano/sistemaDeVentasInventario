const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VentaProducto = sequelize.define('VentaProducto', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  VentaProducto.associate = (models) => {
    VentaProducto.belongsTo(models.Venta, {
      foreignKey: 'venta_id',
      as: 'venta',
    });
    VentaProducto.belongsTo(models.Producto, {
      foreignKey: 'producto_id',
      as: 'producto',
    });
    VentaProducto.belongsTo(models.Bodega, {
      foreignKey: 'bodega_id',
      as: 'bodega',
    });
  };

  return VentaProducto;
};
