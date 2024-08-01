require('dotenv').config(); // Carga las variables de entorno

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { sequelize } = require('../models');
const errorHandler = require('./middleware/errorMiddleware')

// Habilitar CORS
app.use(cors());

app.use(bodyParser.json());
//Error Middleware
app.use(errorHandler);

// Importar las rutas
const productosRoutes = require('./routes/productos');
const bodegasRoutes = require('./routes/bodegas');
const ventasRoutes = require('./routes/ventas');

// Usar las rutas
app.use('/productos', productosRoutes);
app.use('/bodegas', bodegasRoutes);
app.use('/ventas', ventasRoutes);

const port = 3000;

// Sincronizar los modelos
sequelize.sync({ force: true })  // Cambia a { alter: true } en producción
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch(syncErr => {
    console.error('Error al sincronizar los modelos con la base de datos:', syncErr);
  });
