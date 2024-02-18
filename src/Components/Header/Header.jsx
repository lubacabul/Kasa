import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/LOGO.png'
import './Header.css'

function Header() {
    return (
       <header className='header'>
        <Link to="/">
            <img src={Logo} alt="Logo de Kasa" className='header-logo'/>
        </Link>

        <nav className='nav-bar'>
                <NavLink to="/">
                    Accueil
                </NavLink>
                <NavLink to="/About">
                    À propos
                </NavLink>
        </nav>
       </header>
    )
}

export default Header