import React from 'react';
import { useState } from 'react'
import ArrowTop from '../Assets/arrow_top.png'
import './Collapse.css'

function Accordion({title, content}) {
    const[active, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)    }
return (
    <div className={'accordion $={active && "active"}'}>
        <div className='accordionTittle' onClick={handleToggle}>
            {title} 
            <img src={ArrowTop} alt="chevron" className='accordionImg'/>
        </div>
        <div className='accordionContent'>{content}</div>
    </div>
)
}

export default Accordion