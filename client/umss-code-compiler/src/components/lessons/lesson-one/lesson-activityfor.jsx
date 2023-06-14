import React, { useState } from "react"

export default function LessonActivityFor() {
  const [campo1, setcampo1] = useState("")
  const [campo2, setcampo2] = useState("")
  const [campo3, setcampo3] = useState("")
  const [campo4, setcampo4] = useState("")
  const [campo5, setcampo5] = useState("")
  const [campo6, setcampo6] = useState("")
  const [campo7, setcampo7] = useState("")
  const [campo8, setcampo8] = useState("")
  const [resultado, setResultado] = useState("")

  const handleGenerate = () => {
    const textoFormateado = "Los campos han sido llenados correctamente"
    setResultado(textoFormateado)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <pre>
          <code>{"Completa la Sentencia\n"}</code>
          <code>{"\n"}</code>
          <code>{"\n"}</code>
          <code>{"1  class ListarMatriz {\n"}</code>
          <code>{"2    public static void main(String[] args) {\n"}</code>
          <code>{"3        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n"}</code>
          <code>{"4       System.out.println(\"La matriz es:\");\n"}</code>
          <code>{"5        // Iterar sobre las filas de la matriz\n"}</code>
          <code>{"6         for (int "}<input type="text" value={campo1} onChange={(e) => setcampo1(e.target.value)} />{" = 0; "}<input type="text" value={campo2} onChange={(e) => setcampo2(e.target.value)} />{" < matriz.length; "}<input type="text" value={campo3} onChange={(e) => setcampo3(e.target.value)} />{") {\n"}</code>
          <code>{"7            // Iterar sobre las columnas de la matriz\n"}</code>
          <code>{"8            for (int "}<input type="text" value={campo4} onChange={(e) => setcampo4(e.target.value)} />{" = 0; "}<input type="text" value={campo5} onChange={(e) => setcampo5(e.target.value)} />{" < matriz__.length; "}<input type="text" value={campo6} onChange={(e) => setcampo6(e.target.value)} />{") {\n"}</code>
          {"9 System.out.print(matriz["}<input type="text" value={campo7} onChange={(e) => setcampo7(e.target.value)} />{"]["}<input type="text" value={campo8} onChange={(e) => setcampo8(e.target.value)} />{"] + \" \"); // Imprimir el elemento actual\n"}
          <code>{"10           }\n"}</code>
          <code>{"11           System.out.println(); // Imprimir una nueva línea después de cada fila\n"}</code>
          <code>{"12       }\n"}</code>
          <code>{"13    }\n"}</code>
          <code>{"14  }\n"}</code>
        </pre>
      </div>
      <br />
      <button onClick={handleGenerate}>Play</button>
      {resultado && (
        <footer className="mt-auto">
          <h3>Resultado:</h3>
          <p>{resultado}</p>
        </footer>
      )}
    </div>
  )
}
