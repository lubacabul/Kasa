import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import Cards from "../Components/Cards"

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