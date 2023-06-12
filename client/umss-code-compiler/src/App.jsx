import "./App.css"
import React from "react"
import FormRegister from "./components/form-register/FormRegister"
import Home from "./components/home/home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SideBar from "./components/common/sidebar/sidebar"
import LessonOne from "./components/lessons/lesson-one/lesson-one"

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
        path: "/lessons/lesson-one",
        element: <LessonOne/>
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
