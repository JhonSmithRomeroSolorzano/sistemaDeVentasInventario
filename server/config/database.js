const { Sequelize } = require('sequelize');

// Configuración de la base de datos
console.log(process.env.DB_CONNECTION_STRING)
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: false, // Desactiva el logging si no es necesario
});

module.exports = sequelize;
