## Documentación de la Base de Datos (PostgreSQL)

### Tablas

#### Bodegas
- **Descripción**: Tabla que almacena la información de los almacenes.
- **Campos**:
  - `id`: Identificador único de la bodega (integer, not null).
  - `nombre`: Nombre de la bodega (varchar(255), not null).
  - `ubicacion`: Ubicación de la bodega (text, not null).
  - `createdAt`: Fecha y hora de creación (timestamp with time zone, not null).
  - `updatedAt`: Fecha y hora de la última actualización (timestamp with time zone, not null).
- **Índices**:
  - `Bodegas_pkey`: Clave primaria en el campo `id`.
- **Relaciones**:
  - Referenciado por `Productos` y `VentaProductos`.

#### Productos
- **Descripción**: Tabla que almacena la información de los productos.
- **Campos**:
  - `id`: Identificador único del producto (integer, not null).
  - `nombre`: Nombre del producto (varchar(255), not null).
  - `descripcion`: Descripción del producto (text).
  - `precio`: Precio del producto (numeric(10,2), not null).
  - `stock`: Cantidad disponible en stock (integer, not null).
  - `createdAt`: Fecha y hora de creación (timestamp with time zone, not null).
  - `updatedAt`: Fecha y hora de la última actualización (timestamp with time zone, not null).
  - `bodega_id`: Identificador de la bodega a la que pertenece el producto (integer).
- **Índices**:
  - `Productos_pkey`: Clave primaria en el campo `id`.
- **Relaciones**:
  - Referenciado por `VentaProductos`.
  - Llave foránea en `bodega_id` que referencia a `Bodegas`.

#### Venta
- **Descripción**: Tabla que almacena la información de las ventas.
- **Campos**:
  - `id`: Identificador único de la venta (integer, not null).
  - `fecha`: Fecha y hora de la venta (timestamp with time zone).
  - `total_venta`: Total de la venta (numeric(10,2), not null).
  - `createdAt`: Fecha y hora de creación (timestamp with time zone, not null).
  - `updatedAt`: Fecha y hora de la última actualización (timestamp with time zone, not null).
- **Índices**:
  - `Venta_pkey`: Clave primaria en el campo `id`.
- **Relaciones**:
  - Referenciado por `VentaProductos`.

#### VentaProductos
- **Descripción**: Tabla que almacena la información de los productos vendidos en cada venta.
- **Campos**:
  - `id`: Identificador único del registro (integer, not null).
  - `cantidad`: Cantidad de productos vendidos (integer, not null).
  - `createdAt`: Fecha y hora de creación (timestamp with time zone, not null).
  - `updatedAt`: Fecha y hora de la última actualización (timestamp with time zone, not null).
  - `venta_id`: Identificador de la venta (integer).
  - `producto_id`: Identificador del producto (integer).
  - `bodega_id`: Identificador de la bodega (integer).
- **Índices**:
  - `VentaProductos_pkey`: Clave primaria en el campo `id`.
- **Relaciones**:
  - Llave foránea en `venta_id` que referencia a `Venta`.
  - Llave foránea en `producto_id` que referencia a `Productos`.
  - Llave foránea en `bodega_id` que referencia a `Bodegas`.

## Documentación del Proyecto React

### Estructura de la Carpeta `client`

- **`public/`**: Contiene archivos estáticos y de configuración de la aplicación React.
  - `favicon.ico`, `index.html`, `logo192.png`, `logo512.png`, `manifest.json`, `robots.txt`.

- **`src/`**: Contiene el código fuente de la aplicación React.
  - **`App.css`**: Estilos globales de la aplicación.
  - **`App.js`**: Componente principal de la aplicación.
  - **`components/`**: Carpeta para componentes React reutilizables.
    - `Bodegas.jsx`: Componente para gestionar bodegas.
    - `Navbar.jsx`: Componente de barra de navegación.
    - `Productos.jsx`: Componente para gestionar productos.
    - `VentaDetalle.js`: Componente para mostrar detalles de una venta.
    - `Ventas.jsx`: Componente para gestionar ventas.
  - **`context/`**: Contiene el contexto de React para el manejo del estado global.
    - `InventoryContext.jsx`: Contexto para la gestión del inventario.
  - **`index.js`**: Punto de entrada de la aplicación React.
  - **`styles/`**: Contiene los estilos globales de la aplicación.
    - `GlobalStyle.js`: Estilos globales aplicados a toda la aplicación.

### Configuración y Uso

1. **Instalación de Dependencias**:
   - Ejecuta `npm install` en la carpeta `client` para instalar todas las dependencias necesarias.

2. **Ejecución del Proyecto**:
   - Ejecuta `npm start` para iniciar la aplicación React en modo de desarrollo.

3. **Estructura de Rutas**:
   - La aplicación React utiliza React Router para la navegación entre páginas.

4. **Manejo del Estado**:
   - Se utiliza `InventoryContext` para manejar el estado del inventario de forma global.

5. **Componentes**:
   - **Bodegas.jsx**: Permite gestionar y visualizar bodegas.
   - **Navbar.jsx**: Barra de navegación para acceder a las diferentes secciones de la aplicación.
   - **Productos.jsx**: Permite gestionar y visualizar productos, incluyendo la opción de agregar nuevos productos.
   - **VentaDetalle.js**: Muestra los detalles de una venta específica.
   - **Ventas.jsx**: Permite gestionar y registrar ventas, con validación del stock disponible.

## Documentación del Backend (Node.js)

### Estructura de la Carpeta `server`

- **`app.js`**: Archivo principal de configuración del servidor Express.
- **`config/`**: Contiene archivos de configuración del proyecto.
  - **`database.js`**: Configuración de la conexión a la base de datos PostgreSQL utilizando Sequelize.
- **`controllers/`**: Contiene los controladores que manejan la lógica de negocio para las rutas.
  - **`bodegasController.js`**: Controlador para operaciones relacionadas con bodegas.
  - **`productosController.js`**: Controlador para operaciones relacionadas con productos.
  - **`ventasController.js`**: Controlador para operaciones relacionadas con ventas.
- **`middleware/`**: Contiene middleware personalizado para el manejo de errores.
  - **`errorMiddleware.js`**: Middleware para manejar errores en la aplicación.
- **`routes/`**: Contiene las rutas de la API.
  - **`bodegas.js`**: Rutas para operaciones de bodegas.
  - **`productos.js`**: Rutas para operaciones de productos.
  - **`ventas.js`**: Rutas para operaciones de ventas.

### Configuración y Uso

1. **Instalación de Dependencias**:
   - Ejecuta `npm install` en la carpeta `server` para instalar todas las dependencias necesarias.

2. **Ejecución del Servidor**:
   - Ejecuta `npm start` para iniciar el servidor Express.

3. **Modelos y Relaciones**:
   - **Bodega**: Define el modelo para las bodegas, incluyendo asociaciones con productos y ventas.
   - **Producto**: Define el modelo para los productos, incluyendo asociaciones con bodegas y ventas.
   - **Venta**: Define el modelo para las ventas, incluyendo asociaciones con productos.
   - **VentaProducto**: Define el modelo para los productos vendidos en una venta, incluyendo asociaciones con ventas, productos y bodegas.

4. **Controladores**:
   - **bodegasController.js**: Contiene funciones para manejar las solicitudes relacionadas con bodegas.
   - **productosController.js**: Contiene funciones para manejar las solicitudes relacionadas con productos.
   - **ventasController.js**: Contiene funciones para manejar las solicitudes relacionadas con ventas.

5. **Rutas**:
   - **bodegas.js**: Define las rutas para las operaciones CRUD de bodegas.
   - **productos.js**: Define las rutas para las operaciones CRUD de productos.
   - **ventas.js**: Define las rutas para las operaciones CRUD de ventas.

6. **Manejo de Errores**:
   - **errorMiddleware.js**: Middleware para manejar errores y enviar respuestas adecuadas en caso de fallos.
