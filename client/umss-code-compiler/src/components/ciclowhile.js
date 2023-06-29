import Card from "./common/card"

export default function While({ onClickOptionEvent }) {
    return(
        <div className="center-content">
            <Card {...{title: "Ciclo While"}}>
            <div>
          <p>
            El ciclo <strong>while</strong> es una estructura de control repetitiva en programación que se utiliza para ejecutar un bloque de código mientras se cumpla una condición específica.
          </p>
          <p>
            La sintaxis básica del ciclo <strong>while</strong> es la siguiente:
          </p>
          <pre>
            {`
            while (condición) {
              // Bloque de código a ejecutar
            }
            `}
          </pre>
          <p>
            El bloque de código se ejecuta solo si la condición especificada es verdadera. Después de cada ejecución del bloque de código, se verifica la condición nuevamente. Si la condición es verdadera, el bloque de código se ejecuta nuevamente. Este proceso se repite hasta que la condición sea falsa.
          </p>
          <p>
            Asegúrate de actualizar la variable de control dentro del ciclo para evitar bucles infinitos.
          </p>
        </div>               
            </Card>
            
        </div>
    )
}