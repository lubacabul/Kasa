import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Banner from "../Components/Banner/Banner"
import Cards from "../Components/Cards/Cards"

//Fonction composant la page "Home"


function Home() {
    return (
        <div>
            <Header/>
            <main>
                <Banner page = "home" content="Chez vous, partout et ailleurs"/>
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Home