const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Mantener vivo
setInterval(() => {
  console.log('Servidor web activo 👍');
}, 60000); // Cada minuto

const listener = app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + listener.address().port);
});
