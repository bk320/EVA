import Card from "./common/card"
import "./home.css"
import { LoopIcon } from "../assets/icons"

export default function Home({ onClickOptionEvent }) {
    return(
        <div className="center-content">
            <Card {...{ title: 'Home' }}>
                <div>
                    El objetivo de esta aplicación es guiar a los estudiantes principaintes en java a utilizar estructuras de control de total importancia
                    para el proceso de creación de un programa, llamados <em>Bucles o Ciclos.</em>
                    <h2>Ciclos</h2>
                    <div className="center-content loop-icon"><LoopIcon/></div>
                    El ciclo en los lenguajes de programación es una característica que facilita la ejecución de un conjunto de instrucciones y/o funciones
                    repetidamente,las veces necesarias, mientras que alguna condición se evalúa como verdadera.<br/><br/>
                    <em>Por ejemplo</em>, si quisiéramos escribir los números del uno al cien no tendría sentido escribir cien líneas de código mostrando un número
                    en cada una de estas, para eso y para varias cosas más, es útil un ciclo.<br/><br/>
                    Existen tres tipos de ciclos en Java, cada uno tiene una utilidad para casos específicos y depende de nuestra habilidad y
                    conocimientos poder determinar en qué momento es bueno usar alguno de ellos. Esos ciclos son:<br/><br/>
                    <ul>
                        <li> - Ciclo For</li>
                        <li> - Ciclo While</li>
                        <li> - Ciclo Do While</li>
                    </ul>
                </div>
                <div className="center-content goToButton">
                    <button onClick={() => onClickOptionEvent('lessons-do-while')}>Go to learn</button>
                </div>
            </Card>
        </div>
    )
}