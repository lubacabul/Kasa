import { Link } from 'react-router-dom'
import ListLogements from '../../Data/logements.json'
import '../../index.css'
import './Cards.css'

function Logements() {
    return (
        <section className='cardsContainer'>
            <div className='logementsGrid'>
            {ListLogements.map((location) => (
                <div key={location.id} className='logementsItem'>
                    <Link to={"/logements/" + location.id}
                        className='logementsCard'>
                        <img src={location.cover} alt={location.title} className='logementsCover'/>
                        <h2 className='logementsTitle'>{location.title}</h2>
                    </Link>
                </div>
             ))}
             </div>

        </section>
    )
}

export default Logements