const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001
// Configuración de rutas estáticas
app.use(express.static('public'));
app.use(bodyParser.json());

const fs = require('fs');
const path = require('path');

app.post('/guardar-html', (req, res) => {
  const contenidoHTML = req.body;

  const rutaArchivo = path.join(__dirname, 'public', 'resultado.html');

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
    console.log('Servidor Express iniciado en el puerto 5000');
  });

