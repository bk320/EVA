import "./App.css"
import React, { useState } from "react"
import Scorm from "./scorm/Scorm"
import Navbar from "./components/common/nav-bar"
import Home from "./components/home"
import Perfil from "./components/perfil"
import DoWhile from "./components/ciclodowhile"
import While from "./components/ciclowhile"
import For from "./components/ciclofor"
import ActividadFor from "./components/actividadfor"
import { HomeIcon, UserProfileIcon, LessonsIcon } from "./assets/icons"

const navbarItems = [
  {
    type: 'noUnique',
    key: 'profile',
    itemProps: {
      label: Scorm.getLearnerName(),
      icon: <UserProfileIcon/>
    }
  },
  {
    type: 'unique',
    key: 'home',
    itemProps: {
      label: 'Home',
      icon: <HomeIcon/>
    }
  },
  {
    type: 'noUnique',
    key: 'lessons',
    itemProps: {
      label: 'Lessons',
      icon: <LessonsIcon/>
    },
    subItems: [
      {
        label: 'Do While',
        key: 'do-while'
      },
      {
        label: 'While',
        key: 'while'
      },
      {
        label: 'For',
        key: 'for'
      },
      {
        label: 'Activity For loop',
        key: 'activity-for-loop'
      }
    ]
  }
]


function App() {
  const [section, setSection] = useState('home')
  Scorm.init()
  const finishEvent = function() {
    Scorm.finish()
  }
  const onClickOptionEvent = function (sectionName = 'home') {setSection(sectionName)}
  let sectionToRender
  if (section === 'home') sectionToRender = <Home {...{ onClickOptionEvent }}></Home>
  if (section === 'lessons-do-while') sectionToRender = <DoWhile {...{ onClickOptionEvent }}></DoWhile>
  if (section === 'lessons-while') sectionToRender = <While {...{ onClickOptionEvent }}></While>
  if (section === 'lessons-for') sectionToRender = <For {...{ onClickOptionEvent }}></For>
  if (section === 'lessons-activity-for-loop') sectionToRender = <ActividadFor></ActividadFor>
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className="main-panel">
          <div>
            <Navbar {...{ navbarItems, onClickOptionEvent, defaultValue: section }}></Navbar>
          </div>
          <div>
            {sectionToRender}
            {/* <button className="bg-black test" onClick={finishEvent}>Finish classasd</button> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
