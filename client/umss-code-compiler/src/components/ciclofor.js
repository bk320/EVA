

    import React from "react";

    export default function For() {
      const instruccionesRef = React.createRef();
      
      const instrucciones = "Completar los campos para que el ciclo for este completo";
      const resultado=`for (int <input type="text" class="relleno" placeholder="Rellena aquí">= 0; <input type="text" class="relleno" placeholder="Rellena aquí">&lt; matriz.length; <input type="text" class="relleno" placeholder="Rellena aquí">++) {
  for (int <input type="text" class="relleno" placeholder="Rellena aquí">= 0; <input type="text" class="relleno" placeholder="Rellena aquí">&lt; matriz.length; <input type="text" class="relleno" placeholder="Rellena aquí">++) {
    System.out.print (matriz[ <input type="text" class="relleno" placeholder="Rellena aquí">][ <input type="text" class="relleno" placeholder="Rellena aquí">]+" ");
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
          <button className="verificar-button">Ver Resultado</button>
          <br />
        </div>
      );
    }
  