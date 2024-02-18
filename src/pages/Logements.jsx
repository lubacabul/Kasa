import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../Data/logements.json'
import Error from '../Pages/Error'
import Collapse from '../Components/Collapse/Collapse_items'
import '../index.css'

function LogementsCard() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)
    console.log("id:", id);

            return (

            <main> 
                <section >
                    <div >
                            <h2>{location.title}</h2>
                            <p>{location.location}</p>
                    </div>
                    <div>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt="Portrait du propriétaire" />
                    </div>
                </section>
                <section>
                        < Collapse 
                            title='Description'
                            content={location.description}
                        />
                        < Collapse
                            title='Équipements'
                            content= ""
                        />
                </section>
            </main>

        )
    }

export default LogementsCard