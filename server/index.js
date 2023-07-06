const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001
// Configuración de rutas estáticas
app.use(express.static('public'));

// Configurar el middleware body-parser
  app.use(bodyParser.text({ type: 'text/plain' }));
  app.use(bodyParser.text({ type: 'text/html' }));
const fs = require('fs');
const path = require('path');

app.post('/guardar-js', (req, res) => {
  const contenidoJS = req.body;
  console.log(contenidoJS);
  const rutaArchivo = path.join(__dirname, '../client/umss-code-compiler/src/components', 'ciclofor.js');

  fs.writeFile(rutaArchivo, contenidoJS, (err) => {
    if (err) {
      console.error('Error al guardar el archivo JavaScript:', err);
      res.sendStatus(500);
    } else {
      console.log('Archivo JavaScript guardado exitosamente.');
      res.sendStatus(200);
    }
  });
});

app.post('/guardar-html', (req, res) => {
  const contenidoHTML = req.body;
  console.log(contenidoHTML);
  const rutaArchivo = path.join(__dirname, '../client/umss-code-compiler', 'resultado.html');

  fs.writeFile(rutaArchivo, contenidoHTML, (err) => {
    if (err) {
      console.error('Error al guardar el archivo HTML:', err);
      res.sendStatus(500);
    } else {
      console.log('Archivo HTML guardado exitosamente.');
      res.sendStatus(200);
    }
  });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.listen(port, () => {
    console.log('Servidor Express iniciado en el puerto', port);
  });

