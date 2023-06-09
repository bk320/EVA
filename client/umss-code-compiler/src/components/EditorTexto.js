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
    //console.log(palabras);
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
  
    const transformado = transformarPalabras2(palabrasIngresadas);
    const transformado2 = transformarPalabras3(transformado);
  
    let esCorrecto = true;
    let palabrasIncorrectas = new Set();
    let palabrasCorrectas = new Set();
    let esVerdadero = false;
  
    for (let i = 0; i < palabrasIngresadas.length; i++) {
      if (palabrasIngresadas[i] !== correcto[i]) {
        esCorrecto = false;
        palabrasIncorrectas.add(correcto[i]);
      }
    }
    if (esCorrecto) {
      setMensaje('Correcto las variables que utilizaste son las correctas');
    } else {
      if (transformado2.every((palabra, i) => palabra === correcto[i])) {
        for (let i = 0; i < transformado.length; i++) {
          if (palabrasIngresadas[i] !== correcto[i]) {
            palabrasIncorrectas.add(correcto[i]);
            palabrasCorrectas.add(palabrasIngresadas[i]);
          }
        }
        for (let i = 0; i < transformado2.length; i++) {
          if (transformado[i] !== correcto[i]) {
            palabrasIncorrectas.add(correcto[i]);
            palabrasCorrectas.add(transformado[i]);
          }
        }
        esCorrecto = false;
        esVerdadero = transformado2.every(
          (palabra, i) => palabra === correcto[i]
        );
      }
  
      if (esVerdadero) {
        const palabrasIncorrectasArray = Array.from(palabrasIncorrectas);
        const palabrasCorrectasArray = Array.from(palabrasCorrectas);
        setMensaje(
          `Correcto pero las variables que deberías usar son "i" y "j". Debes utilizar "${palabrasIncorrectasArray.join(
            '", "'
          )}" en lugar de "${palabrasCorrectasArray.join('", "')}" para que la sentencia este correctamente escrita.`
        );
      } else {
        const palabrasIncorrectasArray = Array.from(palabrasIncorrectas);
        setMensaje(
          `Asegúrate de que las variables "${palabrasIncorrectasArray.join(
            '", "'
          )}" estén en las posiciones correctas correctos.`
        );
      }
    }
  };
  const transformarPalabras2 = (palabrasIngresadas) => {
    const palabrasEncontradas = new Set();
    const transformado = [];
  
    for (let i = 0; i < palabrasIngresadas.length; i++) {
      const palabra = palabrasIngresadas[i];
  
      if (!palabrasEncontradas.has(palabra)) {
        palabrasEncontradas.add(palabra);
  
        if (Array.from(palabrasEncontradas).indexOf(palabra) === 0) {
          for (let j = 0; j < palabrasIngresadas.length; j++) {
            if (palabrasIngresadas[j] === palabra) {
              transformado.push('i');
            } else {
              transformado.push(palabrasIngresadas[j]);
            }
          }
          return transformado;
        }
      }
  
      transformado.push(palabra);
    }
  
    return transformado;
  };

  const transformarPalabras3 = (palabrasIngresadas) => {
    const palabrasEncontradas = new Set();
    const transformado = [];
  
    for (let i = 0; i < palabrasIngresadas.length; i++) {
      const palabra = palabrasIngresadas[i];
  
      if (!palabrasEncontradas.has(palabra)) {
        palabrasEncontradas.add(palabra);
  
        if (palabra !== 'i') {
          for (let j = 0; j < palabrasIngresadas.length; j++) {
            if (palabrasIngresadas[j] === palabra) {
              transformado.push('j');
            } else {
              transformado.push(palabrasIngresadas[j]);
            }
          }
          return transformado;
        }
      }
    }
  
    return transformado;
  };

  const transformarPalabras = (palabrasIngresadas) => {
    const palabrasEncontradas = new Set();
    const transformado = [];
    let reemplazo = 'i';
    
    for (let i = 0; i < palabrasIngresadas.length; i++) {
      const palabra = palabrasIngresadas[i];
      if (palabra !== 'i' && !palabrasEncontradas.has(palabra)) {
        palabrasEncontradas.add(palabra);
        reemplazo = reemplazo === 'i' ? 'j' : 'i';
      }
  
      transformado.push(reemplazo);
    }
  
    return transformado;
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

  function guardarHTML() {
    const contenidoInstrucciones = instruccionesRef.current.innerHTML;
    const contenidoResultado = resultadoRef.current.innerHTML;
  
    const contenidoHTML = `
      <h1><b>INSTRUCCIONES:</b></h1>
      <div class="instrucciones-container">
        ${contenidoInstrucciones}
      </div>\n
      <h1><b>Rellena Huecos</b></h1>
      <div class="resultado">${contenidoResultado}</div>
      <button class="verificar-button">Ver Resultado</button> 
      <link rel="stylesheet" type="text/css" href="export.css"> 
    `;

    fetch('/guardar-html', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html',
      },
      body: contenidoHTML,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Archivo HTML guardado exitosamente en el backend.');
        } else {
          console.error('Error al guardar el archivo HTML en el backend.');
        }
      })
      .catch((error) => {
        console.error('Error de red al realizar la solicitud:', error);
      });
  }

  function guardarJS() {
    const contenidoInstrucciones = instruccionesRef.current.innerHTML;
  
    // Obtener valores ingresados de los campos de entrada
    const camposRelleno = document.getElementsByClassName('relleno');
    const valoresIngresados = Array.from(camposRelleno).map((input) => input.value.trim());
  
    // Generar contenido del componente de React
    const contenidoResultado = resultadoRef.current.innerHTML;
    const contenidoJS = `
      import React from "react";
  
      export default function For() {
        const instruccionesRef = React.createRef();
        const instrucciones = "${contenidoInstrucciones}";
        const resultado = \`${contenidoResultado}\`;
  
        const formatResultado = () => {
          const lines = resultado.split("\\n");
          const formattedLines = lines.map((line, index) => line.trim());
          return formattedLines.join("<br />");
        };
  
        const createMarkup = () => {
          return { __html: formatResultado() };
        };
        const submitForm = () => {
          let caso = 0;
          let caso2 = 0;
        
        
          const otroArray = ["i", "i", "i", "j", "j", "j", "i", "j"]; // Ejemplo de arreglo
        
          // Comparar los arreglos
          if (inputValues.length !== otroArray.length) {
            console.log("Los arreglos no tienen la misma longitud.");
            return;
          }
        
          const valoresDiferentes = [];
          for (let i = 0; i < inputValues.length; i++) {
            if (inputValues[i] !== otroArray[i]) {
              valoresDiferentes.push(i);
            }
          }
        
          if (valoresDiferentes.length > 0) {
            caso = 3;
        
          } else {
            caso = 1;
          }
        
          // Comparar las posiciones 0, 1, 2 y 6
          const primeraParte = [inputValues[0], inputValues[1], inputValues[2], inputValues[6]];
          const todasIgualesPrimeraParte = primeraParte.every((valor) => valor === primeraParte[0]);
        
          // Comparar las posiciones 3, 4, 5 y 7
          const segundaParte = [inputValues[3], inputValues[4], inputValues[5], inputValues[7]];
          const todasIgualesSegundaParte = segundaParte.every((valor) => valor === segundaParte[0]);
        
          if (todasIgualesPrimeraParte && todasIgualesSegundaParte) {
            caso2 = 2;
          } else {
            caso = 3;
          }
        
          if (caso === 1) {
            document.getElementById('mensaje').textContent = "¡Los campos han sido llenados correctamente!";
          } else if (caso2 === 2) {
            document.getElementById('mensaje').textContent ="Tu solución es correcta, pero es mejor usar 'i' para el primer for y 'j' para el segundo.";
          } else {
            let mensaje = "No es correcto.";
          mensaje += "Los valores en las posiciones " + valoresDiferentes.join(", ") + " no coinciden.";
          mensaje += "Consejo: Es mejor usar 'i' para el primer for y 'j' para el segundo.";
          document.getElementById('mensaje').textContent = mensaje;
          }
        };
  
        const handleVerificarClick = () => {
          verificarPalabras(${JSON.stringify(valoresIngresados)});
        };
  
        const verificarPalabras = (valoresIngresados) => {
          console.log(valoresIngresados);
          const newInputValues = [...valoresIngresados];  
          submitForm
        };
  
        return (
          <div className="editor-container">
            <div className="instrucciones-container">
              <h1>
                <b>{instrucciones}</b>
              </h1>
            </div>
            <br />
            <h1>
              <b>Rellena Huecos</b>
            </h1>
            <div className="resultado" dangerouslySetInnerHTML={createMarkup()} />
            <button className="verificar-button" onClick={handleVerificarClick}>Ver Resultado</button>
            <br />
          </div>
        );
      }
    `;

    fetch('/guardar-js', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: contenidoJS,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Archivo HTML guardado exitosamente en el backend.');
        } else {
          console.error('Error al guardar el archivo HTML en el backend.');
        }
      })
      .catch((error) => {
        console.error('Error de red al realizar la solicitud:', error);
      });
  }
  
  
  
  
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
      <button onClick={guardarHTML} className="html-button">Exportar a HTML</button>

      <button onClick={guardarJS} className="JS-button">Exportar a JS</button>
      <br />
      <div
        className={`mensaje ${
          mensaje === 'Correcto las variables que utilizaste son las correctas' ? 'mensaje-correcto' : 'mensaje-incorrecto'
        }`}
      >
        {mensaje}
      </div>
    </div>
  );
};

export default EditorTexto;
