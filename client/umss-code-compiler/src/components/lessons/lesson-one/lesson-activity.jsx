import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./lesson-activity.css"

const enumLoop = {
  FOR: "For",
  WHILE: "While",
  DO_WHILE: "Do while"
}

export default function LessonActivity () {
  const navigate = useNavigate()
  const { DO_WHILE, WHILE } = enumLoop
  const [loopWarning, setLoopWarning] = useState("")
  const forLoopHandle = () => {
    setLoopWarning("")
    navigate("/lessons/lesson-one/lesson-activityfor")
  }
  return (
    <>
      <div className="shadow-md rounded w-11/12 h-content px-10 py-4 bg-slate-100">
        <p className="text-2xl font-bold">Vamos a Prácticar!</p>
        <div>
          <section className="my-4">
          <fieldset className="p-4 my-8 border-2 border-slate-500 bg-slate-300 rounded-lg ">
            <legend className="font-medium text-white p-2 border-slate-600 border-2 rounded-lg bg-slate-500">Instrucciones:</legend>
            <p className="text-center py-0"><strong>Usando solo las variables `i` y `j`, recorre e imprime una matriz 3x3.</strong></p>
          </fieldset>
          </section>
          <fieldset className="felx justify-center justify-around rounded-lg border-2 border-slate-600 mx-11 my-8 text-center bg-slate-200">
            <p className="font-medium ">Paso #1:</p><p>¿Qué tipo de recorrido harias?</p>
            <div className="flex justify-around text-center py-5">
              <button
                className="flex btn-backgroud p-2 rounded-md min-w-[15%] text-white hover:bg-red-300"
                onClick={forLoopHandle}
              >
                Ciclo For
              </button>
              <button
                className="flex btn-backgroud p-2 rounded-md min-w-[15%] text-white hover:bg-red-300"
                onClick={() => { setLoopWarning("While") }}
              >
                Ciclo While
              </button>
              <button
              id="123"
                className="flex btn-backgroud p-2 rounded-md min-w-[15%] text-white hover:bg-red-300"
                onClick={() => { setLoopWarning("Do while") }}
              >
                Ciclo Do While
              </button>
            </div>
          </fieldset>
        </div><br/>
        {[DO_WHILE, WHILE].includes(loopWarning) && (<div>
          <fieldset className="p-2 border-color flex border-2 wr-11 bg-slate-200">
            <legend className="font-medium">Pistas:
            </legend>
            warning message with {loopWarning} loop
          </fieldset>
          </div>)}
      </div>
    </>
  )
}
