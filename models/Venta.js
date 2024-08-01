const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Venta = sequelize.define('Venta', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {});
  Venta.associate = function(models) {
    Venta.hasMany(models.VentaProducto, { foreignKey: 'venta_id', as: 'ventaProductos' });
  };
  return Venta;
};

