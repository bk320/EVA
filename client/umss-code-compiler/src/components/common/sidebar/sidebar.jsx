import React, { useState } from "react"
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav"
import { HomeIcon, LessonsIcon, UserProfileIcon } from "../../../assets/icons"
import { Outlet, useNavigate } from "react-router-dom"

const aObject = {
  property1: "123",
  property2: 123
}
const aArray = [1, 2]

export default function SideBar() {
  // const property1 = aObject.property1
  // const property1 = aObject['property1']
  const [aa, setAA] = useState(0)
  const onClickEvent = function () {
    setAA(aa + 1)
  }
  const { property1, property2 } = aObject
  console.log(property1, property2)
  const [a, b] = aArray
  console.log(a, b)

  const navigate = useNavigate()
  const [sideSelectedState, setSelectedState] = useState("")
  const [navSideOpen, setNavSideOpen] = useState(false)
  return (
    <>
      <div id="sidebar">
        <button className="ml-20 bg-black text-white p-5" onClick={onClickEvent}>
          {" "}
          click me {aa}
        </button>
        <React.Fragment>
          <SideNav
            expanded={true}
            onToggle={setNavSideOpen}
            onSelect={(selected) => {
              setSelectedState(selected)
              navigate(`/${selected}`)
            }}
          >
            <div className="absolute ml-16 mt-5 mr-2">
              {navSideOpen ? <div className="text-white font-semibold text-lg">Code compiler app</div> : <></>}
            </div>
            {/* <SideNav.Toggle /> */}
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="profile" className="h-full">
                <NavIcon>
                  <div className="flex p-2.5 max-h-full">
                    <UserProfileIcon />
                  </div>
                </NavIcon>
                <NavText>Profile</NavText>
              </NavItem>
              <NavItem eventKey="home" active={sideSelectedState === "home"}>
                <NavIcon>
                  <div className="flex p-2.5 max-h-full">
                    <HomeIcon />
                  </div>
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="lessons">
                <NavIcon>
                  <div className="flex p-2.5 max-h-full">
                    <LessonsIcon />
                  </div>
                </NavIcon>
                <NavText className="text-black">Lessons</NavText>
                <NavItem eventKey="lessons/lesson-one">
                  <NavText>Lesson one</NavText>
                </NavItem>
                <NavItem eventKey="lessons/barchart">
                  <NavText>Lesson two</NavText>
                </NavItem>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
        </React.Fragment>
      </div>
      <div id="detail" className="pl-72">
        <Outlet />
      </div>
    </>
  )
}
