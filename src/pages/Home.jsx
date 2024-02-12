import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"

function Home() {
    return (
        <div>
            <Header/>
            <main>
                <Banner page = "home" content="Chez vous, partout et ailleurs"/>
                Acceuil
            </main>
        </div>
    );
};

export default Home