import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../Data/logements.json'
import StarActive from '../../Assets/star-active.png'
import StarInactive from '../../Assets/star-inactive.png'

import './Stars.css'

function Star() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    const stars = []
    const rating = location.rating
    const maxRating = 5

    for (let i = 0 ; i < rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="Etoile pleine" />)
    }

    for (let i = 0 ; i < maxRating - rating; i++) {
        stars.push(<img key={rating + i} src={StarInactive} alt="Etoile vide" />)
    }

    return (

        <div className='star'>
            {stars}
        </div>
        
    )
}

export default Star