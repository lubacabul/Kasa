import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import Collapse from "../Components/Collapse_items";

function About() {
    return (
        <div>
            <Header/>
            <main>
                <Banner page="about" />
                About
                <section>
                < Collapse 
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                         et toutes les informations sont régulièrement vérifiées  par nos équipes."    
            />
            </section>
            </main>
            <Footer />
        </div>
    );
};

export default About