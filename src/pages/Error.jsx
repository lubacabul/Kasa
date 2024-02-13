import React from "react"
import {NavLink } from 'react-router-dom'
import error404 from "../Assets/404.png"
import Header from "../Components/Header"
import Footer from "../Components/Footer"


function Error() {
    return (
        <div>
            <Header />
            <main className='error'>
                <img src={error404} alt="Erreur" />
                <p className="errorContent">Oups! La page demandez n'existe pas.</p>
                    <NavLink to="/">
                    Retourner sur la page d'accueil
                    </NavLink>
            </main> 
            <Footer />
        </div>
    )
}

export default Error