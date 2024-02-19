import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../Data/logements.json'
import './Tag.css'

function Tag() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    return (

        <div className='tags'>
            <ul className='tag-container'>
                {location.tags.map((tag, index) => (
                    <li key={index} className='item'>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default Tag