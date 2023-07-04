import React, { useState } from 'react';
import './EditorTexto.css'; // Importar el archivo CSS

const EditorTexto = () => {
  const [texto, setTexto] = useState('');
  const [palabrasSeleccionadas, setPalabrasSeleccionadas] = useState([]);
  const [resultado, setResultado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [solucion, setSolucion] = useState('');

  const rellenarPalabra = () => {
    const palabras = texto.split(/\s+/); // Utilizar una expresión regular para dividir el texto en palabras

    const resultadoFinal = palabras.map((palabra, index) => {
      if (palabrasSeleccionadas.includes(palabra)) {
        return (
          <input
            type="text"
            className="relleno"
            placeholder="Rellena aquí"
            key={index}
          />
        );
      } else {
        return palabra + ' ';
      }
    });

    setResultado(resultadoFinal);
  };

  const verificarPalabras = () => {
    const palabrasIngresadas = Array.from(
      document.getElementsByClassName('relleno')
    ).map((input) => input.value.trim());

    const esCorrecto =
      palabrasIngresadas.length === palabrasSeleccionadas.length &&
      palabrasIngresadas.every((palabra) => palabrasSeleccionadas.includes(palabra));

    setMensaje(esCorrecto ? 'Correcto' : 'Muy mal');
  };

  const mostrarSolucion = () => {
    const solucionFinal = palabrasSeleccionadas.join(' ');
    setSolucion(solucionFinal);
  };

  return (
    <div className="editor-container">
      <h1>Rellena Huecos</h1>
      <div className="editor-textarea">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows="10"
          cols="80"
        ></textarea>
      </div>
      <br />
      <p className="selecciona-palabra">Selecciona una o varias palabras:</p>
      <textarea
        value={palabrasSeleccionadas.join(' ')}
        onChange={(e) =>
          setPalabrasSeleccionadas(e.target.value.split(/\s+/)) // Utilizar la misma expresión regular para dividir las palabras seleccionadas
        }
        className="palabras-input"
      ></textarea>
      <br />
      <button
        className="rellenar-button"
        onClick={rellenarPalabra}
        disabled={palabrasSeleccionadas.length === 0}
      >
        Rellenar estas palabras
      </button>
      <br />
      <pre className="resultado">{resultado}</pre>
      <br />
      <button
        className="verificar-button"
        onClick={verificarPalabras}
        disabled={palabrasSeleccionadas.length === 0}
      >
        Verificar
      </button>
      <br />
      <div
        className={`mensaje ${
          mensaje === 'Correcto' ? 'mensaje-correcto' : 'mensaje-incorrecto'
        }`}
      >
        {mensaje}
      </div>
      <br />
      <button
        className="solucion-button"
        onClick={mostrarSolucion}
        disabled={palabrasSeleccionadas.length === 0}
      >
        Solución
      </button>
      <br />
      {solucion && (
        <div className="solucion-container">
          <p className="solucion-text">Solución:</p>
          <div className="solucion">{solucion}</div>
        </div>
      )}
    </div>
  );
};

export default EditorTexto;
