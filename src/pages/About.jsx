import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Banner from "../Components/Banner/Banner"
import Accordion from "../Components/Collapse/Collapse_items";

function About() {
    return (
        <div>
            <Header/>
            <main>
                <Banner page="about" />
                <section className="collapse">
                    < Accordion
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                                et toutes les informations sont régulièrement vérifiées  par nos équipes."    
                    />

                    < Accordion 
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                                perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />

                    < Accordion 
                        title="Service"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                                perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />

                    < Accordion 
                        title="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
                                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au 
                                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également 
                                des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About