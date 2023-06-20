import React, { useState } from "react"
import "./lesson-activityfor"
import button1Icon from "./button1.png"
import button3Icon from "./button3.png"
const Tarea = () => {
  const [campo1, setCampo1] = useState("")
  const [campo2, setCampo2] = useState("")
  const [campo3, setCampo3] = useState("")
  const [campo4, setCampo4] = useState("")
  const [campo5, setCampo5] = useState("")
  const [campo6, setCampo6] = useState("")
  const [campo7, setCampo7] = useState("")
  const [campo8, setCampo8] = useState("")
  const [campo9, setCampo9] = useState("")
  const [resultado, setResultado] = useState("")
  const handleDelete = () => {
    setCampo1("")
    setCampo2("")
    setCampo3("")
    setCampo4("")
    setCampo5("")
    setCampo6("")
    setCampo7("")
    setCampo8("")
    setCampo9("")
    setResultado("")
  }
  const handleGenerate = () => {
    const validacionCampos = [
      { campo: campo1, valorEsperado: "i", linea: 6, numeroCampo: 1 },
      { campo: campo2, valorEsperado: "i", linea: 6, numeroCampo: 2 },
      { campo: campo3, valorEsperado: "i", linea: 6, numeroCampo: 3 },
      { campo: campo4, valorEsperado: "j", linea: 8, numeroCampo: 4 },
      { campo: campo5, valorEsperado: "j", linea: 8, numeroCampo: 5 },
      { campo: campo6, valorEsperado: "i", linea: 8, numeroCampo: 6 },
      { campo: campo7, valorEsperado: "j", linea: 9, numeroCampo: 7 },
      { campo: campo8, valorEsperado: "i", linea: 9, numeroCampo: 8 },
      { campo: campo9, valorEsperado: "j", linea: 9, numeroCampo: 9 }
    ]
    const camposIncorrectos = validacionCampos
      .filter(({ campo, valorEsperado }) => campo.toLowerCase() !== valorEsperado)
      .map(({ campo, linea, numeroCampo }) => `Campo ${numeroCampo} en la línea ${linea}: '${campo}'`)
    if (camposIncorrectos.length === 0) {
      const textoFormateado = "Los campos han sido llenados correctamente.\n 1  2  3 \n 4  5  6 \n 7  8  9"
      setResultado(textoFormateado)
    } else {
      const textoFormateado = `Los siguientes campos son incorrectos:\n${camposIncorrectos.join("\n")} \n->Deben llenarse con datos correctos, con los datos estandares universales 'i' y 'j'`
      setResultado(textoFormateado)
    }
  }
  return (
    <>
    <div>
      <div>
       <div style={{ background: "#EEEFF0", width: "80%", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
        <pre>
        <strong style={{ fontSize: "25px", color: "#940904" }}>{"Paso 2. Completa la Sentencia\n"}</strong>
          <code>{"\n"}</code>
          <code>{"\n"}</code>
          <code>{"1  class ListarMatriz {\n"}</code>
          <code>{"2    public static void main(String[] args) {\n"}</code>
          <code>{"3        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n"}</code>
          <code>{"4       System.out.println(\"La matriz es:\");\n"}</code>
          <code>{"5        // Iterar sobre las filas de la matriz\n"}</code>
          <code>
            {"6         for (int "}
            <input
              className="input1"
              type="text"
              value={campo1}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo1(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo1("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {" = 0; "}
            <input
              className="input2"
              type="text"
              value={campo2}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo2(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo2("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {" < matriz.length; "}
            <input
              className="input3"
              type="text"
              value={campo3}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo3(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo3("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {"++  ) {\n"}
          </code>
          <code>{"7            // Iterar sobre las columnas de la matriz\n"}</code>
          <code>
            {"8            for (int "}
            <input
              className="rounded-lg"
              type="text"
              value={campo4}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo4(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo4("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {" = 0; "}
            <input
              className="rounded-lg"
              type="text"
              value={campo5}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo5(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo5("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {" < matriz["}
            <input
              className="rounded-lg"
              type="text"
              value={campo6}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo6(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo6("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {"].length; "}
            <input
              className="rounded-lg"
              type="text"
              value={campo7}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo7(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo7("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {"++ ) {\n"}
          </code>
          <code>
            {"9                System.out.print(matriz["}
            <input
              className="rounded-lg"
              type="text"
              value={campo8}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo8(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo8("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {"]["}
            <input
              className="rounded-lg"
              type="text"
              value={campo9}
              onChange={(e) => {
                const value = e.target.value
                if (value.length <= 1 && /^[a-zA-Z]$/.test(value)) {
                  setCampo9(value)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  setCampo9("")
                }
              }}
              style={{ border: "2px solid #FF6600", padding: "2px", marginBottom: "4px", width: "100px", textAlign: "center", fontWeight: "bold" }}
            />
            {"] + \" \"); // Imprimir el elemento actual\n"}
          </code>
          <code>{"10           }\n"}</code>
          <code>{"11           System.out.println(); // Imprimir una nueva línea después de cada fila\n"}</code>
          <code>{"12       }\n"}</code>
          <code>{"13    }\n"}</code>
          <code>{"14  }\n"}</code>
        </pre>
        </div>
      </div>
      {resultado && (
  <div style={{ border: "1px solid black", backgroundColor: "#EEEFF0", width: "80%", padding: "5px", marginTop: "5px" }}>
    <footer className="mt-auto">
      <h3>Resultado:</h3>
      <pre>{resultado}</pre>
    </footer>
  </div>
      )}
    </div>
    <div className="absolute inset-y-0 right-0 bg-[#db3d44] content-center w-32" >
    <button className="custom-button" onClick={handleGenerate}><img src={button1Icon} alt="Button 1" className="button-icon"></img></button>
    <br/>
    <button className="custom-button" onClick={handleDelete}><img src={button3Icon} alt="Button 3" className="button-icon"/></button>
    </div>
    </>
  )
}
export default Tarea
