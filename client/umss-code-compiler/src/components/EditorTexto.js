import React, { useState } from 'react';
import './EditorTexto.css'; // Importar el archivo CSS

const EditorTexto = () => {
  const [texto, setTexto] = useState('');
  const [palabrasSeleccionadas, setPalabrasSeleccionadas] = useState([]);
  const [resultado, setResultado] = useState('');
  const [mensaje, setMensaje] = useState('');

  const rellenarPalabra = () => {
    const palabras = texto.split(' ');

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

  return (
    <div className="editor-container">
      <h1>Rellena Huecos</h1>
      <div className="editor-textarea">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows="10"
          cols="50"
        ></textarea>
      </div>
      <br />
      <p className="selecciona-palabra">Selecciona una o varias palabras:</p>
      <textarea
        value={palabrasSeleccionadas.join(' ')}
        onChange={(e) =>
          setPalabrasSeleccionadas(e.target.value.split(' '))
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
      <div className="resultado">{resultado}</div>
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
    </div>
  );
};

export default EditorTexto;
