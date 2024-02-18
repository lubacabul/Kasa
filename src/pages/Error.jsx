import React from "react"
import {NavLink } from 'react-router-dom'
import error404 from "../Assets/404.png"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import '../index.css';



function Error() {
    return (
        <div>
            <Header />
            <main className='error'>
                <img src={error404} alt="Erreur" />
                <p className="error-content">Oups! La page demandez n'existe pas.</p>
                    <NavLink to="/" className="nav-link-error">
                    Retourner sur la page d'accueil
                    </NavLink>
            </main> 
            <Footer />
        </div>
    )
}

export default Error