import "./App.css"
import React from "react"
import FormRegister from "./components/form-register/FormRegister"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SideBar from "./components/common/sidebar/sidebar"
import Tarea from "./task_1/ciclo_for"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/home",
        element: <FormRegister />
      },
      {
        path: "/profile",
        element: <FormRegister />
      },
      {
        path: "/lessons/linechart",
        element: <Tarea/>
      }
    ]

  }
])

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={routes} />
      </header>
    </div>
  )
}

export default App
