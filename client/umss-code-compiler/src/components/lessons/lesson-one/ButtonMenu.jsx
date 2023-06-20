import React from "react"
import { Button } from "react-bootstrap"
import button1Icon from "./button3.png"
import button2Icon from "./button2.png"
import button3Icon from "./button1.png"
const ButtonMenu = () => {
  return (
    <div className="button-menu">
      <Button variant="primary" className="custom-button mb-2">
        <img src={button3Icon} alt="Button 3" className="button-icon" />
      </Button>
      <Button variant="secondary" className="custom-button mb-2">
        <img src={button2Icon} alt="Button 2" className="button-icon" />
      </Button>
      <Button variant="success" className="custom-button mb-2">
        <img src={button1Icon} alt="Button 1" className="button-icon" />
      </Button>
    </div>
  )
}
export default ButtonMenu
