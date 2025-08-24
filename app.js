const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola Mundo!'));

// Solo escuchar si NO estamos corriendo tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`App escuchando en http://localhost:${port}`));
}

module.exports = app; // Export para test
