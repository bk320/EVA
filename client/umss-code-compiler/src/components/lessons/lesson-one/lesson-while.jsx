import React from "react"
import { Container } from "react-bootstrap"
import ButtonMenu from "./ButtonMenu"
import "./LessonDoWhile.css" // Importar archivo CSS externo
const LessonWhile = () => {
  return (
    <>
      <Container fluid>
        <div className="button-container align-items-start">
          <ButtonMenu />
        </div>
      </Container>
    </>
  )
}
export default LessonWhile
