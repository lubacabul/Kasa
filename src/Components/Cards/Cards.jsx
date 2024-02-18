import { Link } from 'react-router-dom'
import ListLogements from '../../Data/logements.json'
import '../../index.css'
import './Cards.css'

function Logements() {
    return (
        <section className='cards-container'>
            <div className='logements-grid'>
            {ListLogements.map((location) => (
                <div key={location.id} className='logements-item'>
                    <Link to={"/logements/" + location.id}
                        className='logements-card'>
                        <img src={location.cover} alt={location.title} className='logements-cover'/>
                        <h2 className='logements-title'>{location.title}</h2>
                    </Link>
                </div>
             ))}
             </div>

        </section>
    )
}

export default Logements