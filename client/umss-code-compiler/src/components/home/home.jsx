import { useNavigate } from "react-router-dom"
import { LoopIcon } from "../../assets/icons"
import "./home.css"
function Home() {
  const navigate = useNavigate()
  const goTo = function () {
    navigate("/lessons/lesson-one/lesson-dowhile")
  }
  return (
    <>
      <div className="shadow-md rounded w-11/12 h-content px-2 pt-1 pb-0 bg-slate-100">
        <h1 className="text-2xl text-center py-3 font-bold">¿Cúal es el objetivo de esta aplicación?</h1>
        <div className="mt-1 mb-4 mx-4">
          <p className="text-sm">
            El objetivo de esta aplicación es guiar a los estudiantes principiantes en java a utilizar estructuras de control de total importancia
            para el proceso de creación de un programa, llamados <em>Bucles o Ciclos.</em>
            <br /></p>
            <h2 className="text-xl font-medium my-2">Ciclos</h2>
                <div className="flex justify-center">
                    <div className="w-28 hover:animate-spin">
                        <LoopIcon/>
                    </div>
                </div>
            <p className="mt-3 text-sm">
            El ciclo en los lenguajes de programación es una característica que facilita la ejecución de un conjunto de instrucciones y/o funciones
            repetidamente,las veces necesarias, mientras que alguna condición se evalúa como verdadera.<br/><br/>
            <em>Por ejemplo</em>, si quisiéramos escribir los números del uno al cien no tendría sentido escribir cien líneas de código mostrando un número
            en cada una de estas, para eso y para varias cosas más, es útil un ciclo.<br/><br/>
            Existen tres tipos de ciclos en Java, cada uno tiene una utilidad para casos específicos y depende de nuestra habilidad y
            conocimientos poder determinar en qué momento es bueno usar alguno de ellos. Esos ciclos son:<br/><br/>
            <ul>
                <li> - Ciclo Do While</li>
                <li> - Ciclo While</li>
                <li> - Ciclo For</li>
            </ul>
            </p>
        <div className="flex justify-center p-3 ">
          <button className="rounded-lg btn-primary text-white p-4 hover:bg-red-300" onClick={goTo}>
            Let&apos;s get started!
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
