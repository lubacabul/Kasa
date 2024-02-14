import React from "react"
import { useState } from "react"
import "./Collapse.css"
import Arrow from '../Assets/arrow_top.png'

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)

  const handleToggle = e => {
    setActive(!active)
  }
  return (
    <div className={`accordions ${active && "active"}`}>
      <div className="accordionTitle" onClick={handleToggle}>
        {title} 
        <img src={Arrow} className="accordionIcon"/>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  )
}

export default Accordion