import "./App.css"
import React from "react"
import FormRegister from "./components/form-register/FormRegister"
import Home from "./components/home/home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SideBar from "./components/common/sidebar/sidebar"
import LessonActivity from "./components/lessons/lesson-one/lesson-activity"
import LessonDoWhile from "./components/lessons/lesson-one/lesson-dowhile"
import LessonWhile from "./components/lessons/lesson-one/lesson-while"
import LessonFor from "./components/lessons/lesson-one/lesson-for"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/profile",
        element: <FormRegister />
      },
      {
        path: "/lessons/lesson-one/lesson-activity",
        element: <LessonActivity/>
      },
      {
        path: "/lessons/lesson-one/lesson-dowhile",
        element: <LessonDoWhile/>
      },
      {
        path: "/lessons/lesson-one/lesson-while",
        element: <LessonWhile/>
      },
      {
        path: "/lessons/lesson-one/lesson-for",
        element: <LessonFor/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={routes} />
      </header>
    </div>
  )
}

export default App
