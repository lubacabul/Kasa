import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../Data/logements.json'
import Error from '../Pages/Error'
import Collapse from '../Components/Collapse/Collapse_items'
import '../index.css';

function LogementsCard() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)
    console.log("id:", id);

            return (

            <main> 
                <img src=''></img>
                <section className='card-container' >
                    <div className='card-information'>
                        <div className='location-id' >
                                <h2 className='location-name'>{location.title}</h2>
                                <p className='location-location'>{location.location}</p>
                        </div>
                        <div className='host-id'>
                                <p className='host-name'>{location.host.name}</p>
                                <img className='host-img' src={location.host.picture} alt="Portrait du propriétaire" />
                        </div>
                    </div>
                    <div className='collapse-container'>
                        < Collapse 
                            title='Description'
                            content={location.description}
                        />
                        < Collapse
                            title='Équipements'
                            content= ""
                        />
                    </div>
                </section>
            </main>

        )
    }

export default LogementsCard