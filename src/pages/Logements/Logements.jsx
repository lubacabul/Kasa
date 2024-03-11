import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../Data/logements.json'
import Error from '../Error/Error'
import Collapse from '../../Components/Collapse/Collapse_items'
import './logements.css';
import '../../index.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import Tag from '../../Components/Tag/Tag'
import Stars from '../../Components/Stars/Stars'

//Fonction de création des pages spécifique de chaque logement

function LogementsCard() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)
    console.log("id:", id);
   
    if (!location) {
        return < Error />
    } else {
    return (
        <div>
            <Header/>
            <main> 
                <Slider />
                <section className='card-container' >
                    <div className='card-information'>
                        <div className='location-id' >
                                <h2 className='location-name'>{location.title}</h2>
                                <p className='location-location'>{location.location}</p>
                                <Tag />
                        </div>
                        <div className='host-information'>
                            <div className='host-id'>
                                    <p className='host-name'>{location.host.name}</p>
                                    <img className='host-img' src={location.host.picture} alt="Portrait du propriétaire" />
                            </div>
                            <Stars />
                        </div>
                    </div>
                    <div className='collapse-container'>
                        < Collapse
                            title='Description'
                            content={location.description}
                        />
                        < Collapse 
                            title='Équipements'
                            content= {
                                <ul>
                                    {location.equipments.map((equipments, index) => (
                                        <li key={index}>{equipments}</li>       
                                    ))}
                                </ul>
                                } 
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>

        )
    }
}

export default LogementsCard