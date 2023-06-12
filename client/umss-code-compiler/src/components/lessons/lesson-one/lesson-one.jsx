import { useState } from "react"

const enumLoop = {
  FOR: "For",
  WHILE: "While",
  DO_WHILE: "Do while"
}

export default function LessonOne () {
  const { DO_WHILE, WHILE } = enumLoop
  const [loopWarning, setLoopWarning] = useState("")
  const forLoopHandle = () => {
    setLoopWarning("")
    console.log("navigate to other place")
  }
  return (
    <>
      <div className="shadow-md rounded w-11/12 h-max px-10 py-5 bg-slate-100">
        Title<br/>
        Content<br/>
        Quew tipo de recorrido harias?
        <div className="flex justify-around text-center py-5">
          <button
            className="flex bg-slate-700 p-2 rounded-md min-w-[15%] text-white"
            onClick={forLoopHandle}
          >
            For loop
          </button>
          <button
            className="flex bg-slate-500 p-2 rounded-md min-w-[15%] text-white"
            onClick={() => { setLoopWarning("While") }}
          >
            While loop
          </button>
          <button
          id="123"
            className="flex bg-slate-300 p-2 rounded-md min-w-[15%] text-white"
            onClick={() => { setLoopWarning("Do while") }}
          >
            Do while loop
          </button>
        </div>
        {[DO_WHILE, WHILE].includes(loopWarning) && (<div>warning message with {loopWarning} loop</div>)}
      </div>
    </>
  )
}
