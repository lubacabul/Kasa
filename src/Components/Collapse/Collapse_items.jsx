import React from "react"
import { useState } from "react"
import "./Collapse.css"
import Arrow from '../../Assets/arrow_top.png'

// Création de la fonction composant Collapse pour la page à propos et les pages logement

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)

  const handleToggle = e => {
    setActive(!active)
  }

  return (
    <div className={`accordions ${active && "active"}`}>
      <div className="accordion-title" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={Arrow} className="accordion-icon"/>
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  )
}

export default Accordion