import Card from "./common/card"
import image from "./images/do-while.png"

export default function DoWhile({ onClickOptionEvent }) {
    return(
        <div className="center-content">
            <Card {...{title:"Ciclo Do While"}}>
            <div>
          <p>
            El ciclo <strong>do-while</strong> es una estructura de control repetitiva en programación que se utiliza cuando deseas ejecutar un bloque de código al menos una vez y luego repetirlo mientras se cumpla una condición específica.
          </p>
          <p>
            La sintaxis básica del ciclo <strong>do-while</strong> es la siguiente:
          </p>
          <pre>
            {`
            do {
              // Bloque de código a ejecutar
            } while (condición);
            `}
          </pre>
          <p>
            En primer lugar, el bloque de código se ejecuta sin evaluar la condición. Luego, se verifica la condición y, si es verdadera, el bloque de código se vuelve a ejecutar. Este proceso se repite hasta que la condición sea falsa.
          </p>
          <p>
            A diferencia del ciclo <code>while</code>, el ciclo <code>do-while</code> garantiza que el bloque de código se ejecute al menos una vez, independientemente de si la condición es verdadera o falsa inicialmente.
          </p>
          <img src={image} alt="Ejemplo de ciclo do-while" />
        </div>
            </Card>
        </div>
    )
}