const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');
const usersRouter = require('./routes/users');
const loansRouter = require('./routes/loans');

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Middleware para registrar las solicitudes HTTP
app.use(morgan('dev'));

// Rutas para las diferentes operaciones CRUD
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/users', usersRouter);
app.use('/loans', loansRouter);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
