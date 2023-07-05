import React, { useState } from 'react';
import { PlayIcon, XCircle } from "../assets/icons";
import Card from "./common/card";
//import './actividadfor.css';

export default function ActividadFor() {
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
    let mensaje = "No es correcto.\n";
  mensaje += "Los valores en las posiciones " + valoresDiferentes.join(", ") + " no coinciden.\n";
  mensaje += "Consejo: Es mejor usar 'i' para el primer for y 'j' para el segundo.";
  document.getElementById('mensaje').textContent = mensaje;
  }
};

  const actions = [
    {
      icon: <PlayIcon/>,
      onClickEvent: submitForm
    },
    {
      icon: <XCircle/>,
      onClickEvent: () => {
        alert('remove');
      }
    }
  ];

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

 

  return (
    <div className="center-content">
      <Card title="Activity for loop" actions={actions}>
        <div>
          <h2>Completar el código:</h2>
          <pre>
            <code>
              {"for (int "}
              <input type="text" id="var1" value={inputValues[0]} onChange={(e) => handleInputChange(0, e.target.value)} style={{ width: "30px" }} />
              {" = 0; "}
              <input type="text" id="var2" value={inputValues[1]} onChange={(e) => handleInputChange(1, e.target.value)} style={{ width: "30px" }} />
              {" < matriz.length; "}
              <input type="text" id="var3" value={inputValues[2]} onChange={(e) => handleInputChange(2, e.target.value)} style={{ width: "30px" }}/>
              {"++) {\n  for (int "}
              <input type="text" id="var4" value={inputValues[3]} onChange={(e) => handleInputChange(3, e.target.value)} style={{ width: "30px" }}/>
              {" = 0; "}
              <input type="text" id="var5" value={inputValues[4]} onChange={(e) => handleInputChange(4, e.target.value)} style={{ width: "30px" }}/>
              {" < matriz.length; "}
              <input type="text" id="var6" value={inputValues[5]} onChange={(e) => handleInputChange(5, e.target.value)} style={{ width: "30px" }}/>
              {"++) {\n    System.out.print (matriz["}
              <input type="text" id="var7" value={inputValues[6]} onChange={(e) => handleInputChange(6, e.target.value)} style={{ width: "30px" }}/>
              {"]["}
              <input type="text" id="var8" value={inputValues[7]} onChange={(e) => handleInputChange(7, e.target.value)} style={{ width: "30px" }}/>
              {"]+\"\ \");\n   "}
              {"System.out.println();\n  }\n}"}
            </code>
          </pre>
            <div id="mensaje" className="mensaje-destacado">
          {/* Elemento para mostrar los mensajes */}
        </div>
        </div>
      </Card>
    </div>
  );
  }  