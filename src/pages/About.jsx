import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"

function About() {
    return (
        <div>
            <Header/>
            <main>
                <Banner page="about" />
                About
            </main>
            <Footer />
        </div>
    );
};

export default About