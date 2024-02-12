import React from 'react'
import WhiteLogo from '../Assets/whiteLogo.png'
import './Footer.css'

function Footer() {
    return (
       <footer>
        <img src={WhiteLogo} alt="Logo de Kasa" />

        <p>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
}

export default Footer