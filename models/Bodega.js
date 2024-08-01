const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Bodega = sequelize.define('Bodega', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Bodega.associate = (models) => {
    Bodega.hasMany(models.Producto, {
      foreignKey: 'bodega_id',
      as: 'productos',
    });
    Bodega.hasMany(models.VentaProducto, {
      foreignKey: 'bodega_id',
      as: 'ventas',
    });
  };

  return Bodega;
};
