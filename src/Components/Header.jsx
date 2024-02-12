import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Assets/LOGO.png'
import './Header.css'

function Header() {
    return (
       <header className='Header'>
        <Link to="/">
            <img src={Logo} alt="Logo de Kasa" className='Header_logo'/>
        </Link>

        <nav className='navbar'>
                <NavLink to="/">
                    Accueil
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
        </nav>
       </header>
    )
}

export default Header