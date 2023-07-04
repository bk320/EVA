import React, { useState, useRef } from 'react';
import './EditorTexto.css'; // Importar el archivo CSS

const EditorTexto = () => {
  const [instrucciones, setInstrucciones] = useState('');
  const [texto, setTexto] = useState('');
  const [palabrasSeleccionadas, setPalabrasSeleccionadas] = useState([]);
  const [resultado, setResultado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [ordenPalabras, setOrdenPalabras] = useState([]);
  const [correcto, setCorrecto] = useState([]);
  const [contenidoInstrucciones, setContenidoInstrucciones] = useState('');
  const resultadoRef = useRef(null);
  const instruccionesRef = useRef(null);

  const rellenarPalabra = () => {
    const palabras = texto.split(' ');
    console.log(palabras);
    const resultadoFinal = palabras.map((palabra, index) => {
      if (palabrasSeleccionadas.includes(palabra)) {
        setCorrecto((prevCorrecto) => [...prevCorrecto, palabra]);
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
    setOrdenPalabras(
      palabrasSeleccionadas.filter((palabra) => texto.includes(palabra))
    );
  };

  const verificarPalabras = () => {
    const palabrasIngresadas = Array.from(
      document.getElementsByClassName('relleno')
    ).map((input) => input.value.trim());

    let esCorrecto = true;
    let palabraIncorrecta = '';

    if (palabrasIngresadas.length === correcto.length) {
      for (let i = 0; i < correcto.length; i++) {
        if (palabrasIngresadas[i] !== correcto[i]) {
          esCorrecto = false;
          palabraIncorrecta = correcto[i];
          break;
        }
      }
    } else {
      esCorrecto = false;
    }
    console.log(palabrasIngresadas);
    console.log(correcto);
    console.log('correct');
    console.log(esCorrecto);
    if (esCorrecto) {
      setMensaje('Correcto');
    } else if (palabraIncorrecta) {
      setMensaje(
        `Correcto pero no tanto. La palabra "${palabraIncorrecta}" debería ir en ese lugar.`
      );
    } else {
      setMensaje('Muy mal');
    }
  };

  const aceptarInstrucciones = () => {
    setContenidoInstrucciones(instrucciones);
  };


  const exportarAHTML = () => {
    const contenidoInstrucciones = instruccionesRef.current.innerHTML;
    const contenidoResultado = resultadoRef.current.innerHTML;
  
    const contenido = `
      <h1><b>INSTRUCCIONES:</b></h1>
      <div class="instrucciones-container">
        ${contenidoInstrucciones}
      </div>\n
      <h1><b>Rellena Huecos</b></h1>
      <div class="resultado">${contenidoResultado}</div>
      <button class="verificar-button">Ver Resultado</button> 
      <link rel="stylesheet" type="text/css" href="export.css"> 
    `;
  
    const enlaceDescarga = document.createElement('a');
    const archivoHTML = new Blob([contenido], { type: 'text/html' });
  
    enlaceDescarga.href = URL.createObjectURL(archivoHTML);
    enlaceDescarga.download = 'resultado.html';
    enlaceDescarga.click();
  };

  return (
    <div className="editor-container">
      <h1>
        <b>INSTRUCCIONES:</b>
      </h1>
      <div className="instrucciones-container">
        <textarea
          ref={instruccionesRef}
          id="instrucciones"
          value={instrucciones}
          onChange={(e) => setInstrucciones(e.target.value)}
          rows="5"
          cols="80"
        ></textarea>
        <button className="aceptar-button" onClick={aceptarInstrucciones}>
          ACEPTAR
        </button>
      </div>
      {contenidoInstrucciones && (
        <p className="contenido-instrucciones">{contenidoInstrucciones}</p>
      )}
      <h1>
        <b>Rellena Huecos</b>
      </h1>
      <div className="editor-textarea">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows="10"
          cols="80"
        ></textarea>
      </div>
      <br />
      <p className="selecciona-palabra">
        <b>Selecciona una o varias palabras:</b>
      </p>
      <textarea
        value={palabrasSeleccionadas.join(' ')}
        onChange={(e) => setPalabrasSeleccionadas(e.target.value.split(' '))}
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
      <pre ref={resultadoRef} className="resultado">{resultado}</pre>
      <br />
      <button
        className="verificar-button"
        onClick={verificarPalabras}
        disabled={palabrasSeleccionadas.length === 0}
      >
        <b>Verificar</b>
      </button>
      <button onClick={exportarAHTML} className="html-button">Exportar a HTML</button>
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
