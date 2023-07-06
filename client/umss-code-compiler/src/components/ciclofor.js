
      import React from "react";
  
      export default function For() {
        const instruccionesRef = React.createRef();
        const instrucciones = "";
        const resultado = `for (int <input type="text" class="relleno" placeholder="Rellena aquí">= 0; <input type="text" class="relleno" placeholder="Rellena aquí">&lt; matriz.length; <input type="text" class="relleno" placeholder="Rellena aquí">++) {
  for (int j = 0; j &lt; matriz.length; j ++) {
    System.out.print (matriz[ <input type="text" class="relleno" placeholder="Rellena aquí">][ j ]+" ");
   System.out.println();
  }
} `;
  
        const formatResultado = () => {
          const lines = resultado.split("\n");
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
          verificarPalabras(["","","",""]);
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
    