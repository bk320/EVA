import Card from "./common/card"

export default function For() {
    return(
        <div className="center-content">
            <Card {...{ title: 'Ciclo For' }}>
            <div>
          <p>
            El ciclo <strong>for</strong> es una estructura de control repetitiva en programación que se utiliza para ejecutar un bloque de código un número específico de veces.
          </p>
          <p>
            La sintaxis básica del ciclo <strong>for</strong> es la siguiente:
          </p>
          <pre>
            {`
            for (inicialización; condición; incremento/decremento) {
              // Bloque de código a ejecutar
            }
            `}
          </pre>
          <p>
            La parte de <code>inicialización</code> se utiliza para establecer el valor inicial de la variable de control. La parte de <code>condición</code> especifica la condición que se evalúa antes de cada iteración del ciclo. Si la condición es verdadera, se ejecuta el bloque de código. La parte de <code>incremento/decremento</code> actualiza la variable de control después de cada iteración.
          </p>
          <p>
            Puedes utilizar la variable de control dentro del bloque de código para realizar acciones específicas en cada iteración. El ciclo se repite hasta que la condición sea falsa.
          </p>
          <p>
            Asegúrate de establecer adecuadamente la condición y actualizar la variable de control para evitar bucles infinitos.
          </p>
        </div>
            </Card>
        </div>
    )
}